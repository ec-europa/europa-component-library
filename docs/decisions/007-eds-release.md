# Release EDS separately from ECL, in the same monorepo

| Status        | proposed                                              |
| ------------- | ----------------------------------------------------- |
| **Proposed**  | 28/09/2026                                            |
| **Accepted**  |                                                       |
| **Driver**    | @emeryro                                              |
| **Approver**  |                                                       |
| **Consulted** |                                                       |
| **Informed**  | [@team](https://github.com/orgs/ec-europa/teams/inno) |

## Decision

To be decided.

## Context

EDS (foundations, and components to come) is developed in the ECL monorepo,
as a parallel track to ECL. It is distributed the same way as the EC and EU
systems, through a preset (`@ecl/preset-eds`), but is expected to evolve on
its own schedule: EDS is starting at `0.x` while ECL is at `5.x`.

ECL releases rely on Lerna in **fixed mode**: a single `version` in
`lerna.json` shared by every public package.

1. `lerna version --exact` (`scripts/update-version.sh`) bumps all packages
   to the new version. After the release, `lerna.json` is set back to
   `5-dev`.
2. `lerna publish from-package` (`scripts/publish.sh`) publishes every public
   package whose version isn't on npm yet.
3. Pushing a `v*` tag triggers `.github/workflows/production.yml`: presets
   are built into `dist/packages/*`, an SRI file is generated from them,
   Storybook and website are built and uploaded to S3, EC/EU presets are
   zipped and attached to the GitHub release.

Other places depending on Lerna:

- `lerna.json` version is read by `scripts/packagesList.sh` and
  `src/website/vite.config.js` (ECL version displayed on the website).
- `lerna-changelog` builds `CHANGELOG.md` from PR labels. It is a separate
  tool and does not require Lerna itself.

Left as is, EDS packages would be bumped to ECL's version (e.g. `0.1.0` →
`5.4.0`) and published at the next ECL release, and their files would be
part of ECL's SRI file, CDN upload and package list.

### Interim state

Already in place, to keep EDS out of ECL releases until this is decided:

- Everything EDS lives under `src/eds/`: `foundations/`, `components/`,
  `preset/`, `playground/` (Storybook), `scripts/`.
- `@ecl/eds-foundations` and `@ecl/preset-eds` are `"private": true`, so
  `lerna publish` skips them. **Not sufficient on its own**: Lerna still
  lists them (`lerna changed` from the root includes the EDS packages), and
  `lerna version` also bumps private packages, so the next ECL
  `update-version` would set them to ECL's version.
- EDS has its own build, `pnpm dist:eds`, output to `src/eds/dist/`
  (`preset/` and `playground/`), not to the root `dist/`. It is not part of
  `dist-presets.sh` / `dist-storybook.sh`, so not in ECL's SRI file, S3
  upload or zips.
- The website includes the EDS Storybook only when `src/eds/dist/playground`
  exists. The Netlify jobs in `ci.yml` (PR preview, `*-dev` branches) run
  `pnpm dist:eds`; `production.yml` doesn't.

### GitHub releases

ECL GitHub releases are created manually, from the `v5` branch, on a new
`v5.x.y` tag, with the changelog as description (`.github/CONTRIBUTING.md`).
The tag triggers `production.yml`, which uploads zips, SRI file and
`ECL-npm-packages` to that existing release.

Several release lines in one repository are supported by GitHub: EDS
releases could use `eds-v*` tags (e.g. release "EDS 0.2.0" on tag
`eds-v0.2.0`), not matched by `production.yml`'s `v*` filter. Both lines
would be listed together on the releases page. Points to handle, whatever
the versioning tool:

- **"Latest" release**: GitHub flags the most recent non-prerelease as
  "Latest", so an EDS release would take the flag, and the README's
  "download the latest release" link (`/releases/latest`) would point to EDS
  instead of ECL presets. Possible handling: untick "Set as the latest
  release" on EDS releases, or publish them as pre-releases while in `0.x`.
- **Changelog range**: `lerna-changelog` starts from the most recent
  reachable tag (`git describe --tags`). An `eds-v*` tag created after the
  last ECL release would silently drop earlier ECL PRs from the next ECL
  changelog. Possible handling: always pass the previous tag of the same
  line (e.g. `pnpm changelog --from v5.3.0`).
- **Release notes content**: `lerna-changelog` lists every PR carrying one
  of its configured labels, and supports a single configuration. EDS PRs
  would need dedicated labels (e.g. `eds: feature`) kept out of ECL's
  configuration. EDS notes would need another tool, e.g. GitHub's generated
  release notes (label categories configured in `.github/release.yml`, with
  an explicit previous tag) or Changesets' changelog
  ([option D](#option-d-replace-lerna-with-changesets)).
- **Release assets**: nothing uploads EDS assets yet. This would need a
  workflow triggered by `eds-v*` tags, running `pnpm dist:eds` and attaching
  a zip of `src/eds/dist/preset`.
- **Release branch**: ECL is released from `v5` after merging `v5-dev` into
  it. Releasing EDS from `v5` would bring unreleased ECL changes into it, so
  EDS would have to be tagged from `v5-dev` or from a dedicated branch.

### Open questions

Independent of the chosen option:

- npm scope: keep `@ecl/eds-*` or use a dedicated one (e.g. `@eds/*`)?
- Changelog: shared `CHANGELOG.md` with an EDS label, or a separate one
  under `src/eds/`?
- Release notes: keep `lerna-changelog` for ECL, and which tool for EDS?
- Should EDS have its own production workflow (CDN upload, SRI, zips,
  website deployment), triggered by `eds-v*` tags?
- GitHub releases: how to keep ECL as "Latest" (EDS as pre-releases, or
  "Latest" unticked)?
- Which branch EDS releases are cut from (`v5-dev`, or a dedicated one)?

## Consequences

To be defined once an option is chosen. Pros and cons of each option are
listed under [Alternatives Considered](#alternatives-considered).

## Alternatives Considered

### Option A: lockstep, EDS follows ECL's version

Nothing to change except EDS package versions (and removing `private`).

- **Pros:** no tooling or process change.
- **Cons:** EDS versions carry no meaning, EDS can't be released on its own,
  and an immature EDS starts at `5.x`.

### Option B: Lerna independent mode

`"version": "independent"` in `lerna.json`.

- **Pros:** every package gets its own version.
- **Cons:** ECL loses its single version; 100+ packages would be versioned
  separately. Not realistic.

### Option C: Lerna for ECL, dedicated process for EDS

Common to both variants below: restrict the root Lerna to ECL packages with
an explicit `packages` list in the root `lerna.json` (Lerna currently falls
back to `pnpm-workspace.yaml`, which includes `src/eds/**`). As EDS is
confined to `src/eds/`, the list is `pnpm-workspace.yaml`'s globs minus
`src/eds/**`. `!` exclusions are not reliable there: Lerna resolves some
globs one by one, where a negated glob matches nothing instead of excluding.

#### Variant C1: EDS release script based on pnpm

Add a `release:eds` script: `pnpm --filter "./src/eds/**" version …`, then
`pnpm -r --filter … publish`, with `eds-v*` tags (not matched by
`production.yml`'s `v*` filter).

#### Variant C2: second Lerna setup inside `src/eds`

EDS gets its own Lerna configuration, next to its packages:

- `src/eds/lerna.json`: EDS version (`0.x`), `packages` (`foundations`,
  `preset`, `components/*`, `playground`), `tagVersionPrefix: "eds-v"`, own
  `allowBranch` rules.
- `src/eds/package.json`: private, required by Lerna as project root, with
  EDS release scripts (e.g. `version:eds`, `publish:eds`).
- `pnpm-workspace.yaml` stays shared (single install and lockfile, needed
  for the links between ECL and EDS packages).

Lerna uses the closest `lerna.json` from the current directory, so commands
run from `src/eds` only see EDS. Checked with a temporary setup:
`lerna list` from `src/eds` found exactly the three EDS packages.

To verify with a dry run:

- Tag isolation: without a tag prefix, Lerna in `src/eds` computed changes
  since an ECL `v*` tag. `tagVersionPrefix: "eds-v"` should fix it but
  couldn't be checked without running `lerna version`.
- Whether pnpm's `src/eds/**` glob also picks `src/eds/package.json` as a
  workspace package (harmless, as it's private).

Limits:

- `lerna-changelog` always reads its configuration from the repository root
  (git top level), so EDS can't have its own configuration in `src/eds`
  (see [GitHub releases](#github-releases)).
- CI release workflow and GitHub releases handling are still needed (see
  [GitHub releases](#github-releases)).

#### Pros and cons

- **Pros:** smallest change; ECL release flow untouched. With C2, EDS uses
  the same commands as ECL, and its release tooling stays in `src/eds/`.
- **Cons:** two release processes to maintain; version pins crossing the two
  groups (e.g. `@ecl/preset-eds` → `@ecl/builder`) must be bumped manually;
  EDS needs its own CI release job.

### Option D: replace Lerna with Changesets

[`@changesets/cli`](https://github.com/changesets/changesets), with two
`fixed` groups. Indicative `.changeset/config.json`:

```json
{
  "fixed": [
    ["@ecl/*", "!@ecl/eds-*", "!@ecl/preset-eds"],
    ["@ecl/eds-*", "@ecl/preset-eds"]
  ],
  "privatePackages": { "version": false, "tag": false },
  "changelog": false,
  "commit": false,
  "access": "public"
}
```

Migration:

| Today (Lerna)                  | With Changesets                                          |
| ------------------------------ | -------------------------------------------------------- |
| `lerna version --exact`        | `changeset version`                                      |
| `lerna publish from-package`   | `changeset publish --no-git-tag` (uses `pnpm publish`)   |
| `lerna.json` version (`5-dev`) | read from a package, e.g. `@ecl/preset-ec/package.json`  |
| `lerna-changelog` (PR labels)  | kept as is (config moved out of `lerna.json` if removed) |
| `allowBranch` guards           | a branch check in `publish.sh`                           |

Points of attention:

- `changeset version` needs at least one changeset file. Either the release
  manager writes one at release time (closest to the current process,
  `lerna-changelog` keeps generating `CHANGELOG.md`), or every PR adds one
  (idiomatic, but a new habit for contributors and it replaces label-based
  changelogs).
- Without `"changelog": false`, a `CHANGELOG.md` is generated in each of the
  ~127 packages.
- `changeset publish` creates one git tag per package; `--no-git-tag` keeps
  the current manual `v5.x.y` tag (plus `eds-v*` for EDS).
- To verify: `!` negation support in `fixed` globs. A dedicated npm scope for
  EDS would make the groups trivial.
- Private packages (Storybooks, website) would no longer be version-bumped,
  unlike with Lerna.
- Documentation to update: `.github/CONTRIBUTING.md` release steps, Lerna
  badge in `README.md`, `docs/conventions/linting.md`.

- **Pros:** native support for several version groups in a pnpm monorepo;
  cross-group dependencies handled; single release flow.
- **Cons:** changes a release process the team knows; estimated about a day
  of work plus a dry run on a throwaway branch.
