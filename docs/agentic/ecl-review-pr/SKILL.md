---
name: ecl-review-pr
description: Reviews a colleague's ECL pull request against the project's conventions and the issues reviewers repeatedly raise — Twig robustness, tokens and color modes, EC/EU/print/RTL parity, story controls, demo data, JS safety, accessibility, docs and dependencies — and produces a local, severity-ranked report. Use when the user asks to review a PR (by number, URL or branch), check a colleague's changes before merge, or prepare review comments. The report stays local; nothing is posted to GitHub.
---

# Review an ECL pull request

The goal is a report the reviewer can trust and paste from: findings that are specific
(`file:line`, what is wrong, suggested fix), ranked by severity, with no noise. The
human reviewer still checks the rendering in Storybook — this skill tells them where
to look.

## Step 0 — ask before starting

Ask the user, in a single message:

> Should I also run lint and the component tests locally? It needs a clean working
> tree, switches branch for the duration of the run, and may need `pnpm install`.
> (default: no — static review only)

Skip the question if the request already answers it.

## Step 1 — get the PR

Works with or without the GitHub CLI. With a PR number `<n>`:

```bash
# metadata (title, description, base branch) — public API, no login needed
curl -s https://api.github.com/repos/ec-europa/europa-component-library/pulls/<n> \
  | python3 -c "import json,sys; d=json.load(sys.stdin); print(d['title'], '|', d['base']['ref'], '|', d['head']['ref']); print(d['body'] or '')"

# code — fetch without touching the working tree
git fetch origin pull/<n>/head:review/pr-<n> <base>
git diff --stat origin/<base>...review/pr-<n>
git diff origin/<base>...review/pr-<n>
```

With a branch name, use `origin/<branch>` instead of `review/pr-<n>`. The base is
usually `v5-dev`; take it from the metadata rather than assuming.

**Ticket context** — the FRONT-XXXX ticket is on Jira behind a login and cannot be
fetched. Work from the PR title and description. If the intent of a change is unclear
and the answer would change a finding, ask the user to paste the ticket's acceptance
criteria rather than guessing.

## Step 2 — understand before judging

1. Read the PR description and the `--stat` to see the scope.
2. For each touched component, read the **full** changed files on the PR branch
   (`git show review/pr-<n>:<path>`), not just the hunks — many findings (unused
   variables, missing README entries, EC/EU parity) are only visible in context.
3. Classify the change: new component, component edit, story, tokens, JS, docs/website,
   tooling. This decides which checklist sections apply.

## Step 3 — check

Go through [reference/checklist.md](reference/checklist.md), only the sections that
apply. The checklist is built from what ECL reviewers actually flag; the existing skills
(`ecl-edit-component`, `ecl-edit-story`, `ecl-test-component`, `ecl-create-component`,
`ecl-edit-color-tokens`) describe the conventions in detail when a finding needs
backing.

For general logic bugs outside ECL conventions, suggest the user also runs
`/code-review` on the branch rather than duplicating it here.

## Step 4 — local checks (only if accepted in step 0)

```bash
git status --porcelain            # must be empty — otherwise stop and tell the user
git switch review/pr-<n>
pnpm install                      # only if any package.json or the lockfile changed
pnpm lint
pnpm test:components -- <name>    # for each component whose Twig or demo data changed
git switch -                      # always return to the user's branch
```

Report failures verbatim (trimmed to the relevant lines). A failing snapshot in a PR
usually means the author forgot to commit updated snapshots — check whether the diff
matches the intended change before calling it a bug.

## Step 5 — report

Output in the conversation, in this shape:

```markdown
## PR #<n> — <title>

<1–2 sentences: what the PR does and overall assessment>

### Blocking

- `path/file.ext:42` — <what is wrong and why it matters>. <suggested fix — a GitHub
  `suggestion` code block when it is a one- or two-line change>

### Should fix

- ...

### Nits

- ...

### Check visually in Storybook

- <specific stories/states to look at: dark background, color modes, EU, RTL, mobile, print>

### Out of scope / follow-up

- <pre-existing issues noticed, worth a separate task>
```

- **Blocking** — broken behaviour, regression, a11y failure, breaking change without
  migration note, security (e.g. `innerHTML` with data).
- **Should fix** — convention violations that will cost later (hardcoded values, missing
  EU/print/RTL counterpart, README out of sync).
- **Nits** — naming, wording, leftovers that do not affect output.
- Omit empty sections. Do not pad with praise or generic advice; if there are no
  findings, say so.
- Write findings the way a colleague would: direct, with the reason, and phrased as a
  question when you are not sure of the intent ("is this meant to also affect the
  vertical layout?").

Clean up afterwards: `git branch -D review/pr-<n>`.
