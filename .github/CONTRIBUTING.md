# Contribution guidelines

## Git conventions

Please follow [our Git conventions](../docs/conventions/git.md) for naming your branches and commits.

## PR description

Please fill in the description following the template.

## Release process

1.  Each merged PR should be labeled with one of the [labels](https://github.com/ec-europa/europa-component-library/labels) named `tag: ...` to indicate what kind of change it is.

2.  Start off from branch `v2-dev`. Pull latest changes.

3.  Create a new branch `chore/release-` and add the release version number. Follow same `chore/` branching pattern for small tweaks on the release if necessary. (such as spelling corrections in documentation)

4.  Create a change log entry for the release:

    - You'll need an [access token for the GitHub API](https://help.github.com/articles/creating-an-access-token-for-command-line-use/). See [lerna documentation](https://github.com/lerna/lerna-changelog#github-token) for more information about it (including needed permissions).
    - Save the token to this environment variable: `export GITHUB_AUTH="..."`
    - Run `npm run changelog`. The command will find all the labeled pull requests merged since the last release and create a change log entry with all the changes and links to PRs and their authors.
    - Copy and paste the output from the changelog generator to `CHANGELOG.md`.
    - Paste the same contents to `src/website/src/pages/{system}/whats-new/index.md`. Remove the mentions and the committers.
    - For older releases before v2, ensure to edit also main `README.md` file.

5.  Increment packages version:

    - Make sure the version number in `lerna.json` is set to the last version published (so for instance to release version `2.25`, lerna version has to be `2.24`).
    - Run `npm run update-version`. It will increment the version number of the updated packages.

6.  Open a pull request with changes you've made from the previous steps. Don't apply any `tag: *` label on it.

7.  Merge the pull request to `v2-dev`.

8.  Locally, pull latest `v2-dev` and merge it to `v2`. This merge means you can now release `v2`.

9.  In order to be able to publish packages on `npm`, make sure you are logged in. `npm whoami` will show your npm username if you are logged in. Otherwise, please run `npm login`.

10. To publish the latest changes run `npm run publish` :warning: **Do not run `npm publish`!**

11. The CLI will ask for a confirmation about the new package versions. Please verify them carefully before accepting.

12. Once you have accepted, the script will start publishing the packages. Go to your `npm` user profile and organisation `@ecl` and double-check packages have actually been published.

13. Push the locally-synched `v2` to the remote. This marks the release as complete.

14. Finally, create a GitHub Release from branch `v2`, with the following text:

    - Paste the changelog generated at step 3
    - Add "useful links" section (copy from another release and update version number)

15. Once the tag is created, drone will publish the assets on the CDN. It may take a few minutes for everything to be there.

16. Congratulations :clap: the release is done!

17. Final step: Don't forget to update branch `v2-dev` to add new info:

    - Update the root `README.md` with the new SRI hashes (provided in the release assets)
    - Set `"version": "2-dev"` back in `lerna.json`.
