# Contribution guidelines

## Git conventions

Please follow [our Git conventions](../docs/conventions/git.md) for naming your branches and commits.

## PR description

Please fill in the description following the template.

## Release process

1.  Each merged PR should be labeled with one of the [labels](https://github.com/ec-europa/europa-component-library/labels) named `tag: ...` to indicate what kind of change it is.

2.  Merge changes from `v2-dev` branch into `v2` branch.

3.  Checkout `v2` branch and pull latest changes.

4.  Create a change log entry for the release:

    - You'll need an [access token for the GitHub API](https://help.github.com/articles/creating-an-access-token-for-command-line-use/). Save it to this environment variable: `export GITHUB_AUTH="..."`
    - Run `npm run changelog`. The command will find all the labeled pull requests merged since the last release and create a change log entry with all the changes and links to PRs and their authors.
    - Copy and paste the output from the changelog generator to `CHANGELOG.md`.
    - Paste the same contents to `src/website/src/pages/{system}/whats-new/index.md`. Remove the mentions and the committers.

5.  Run `npm run update-version`. It will bump/increment the version number of the updated packages. Note: you might want to change the `bump` parameter in `lerna.json`. See: https://github.com/lerna/lerna/tree/master/commands/version#semver-bump

6.  Open a pull request with changes you've made from the previous steps. Don't apply any `tag: *` label on it.

7.  Merge the PR.

8.  Pull latest changes from `v2` branch once again.

9.  Make sure you are logged in. `npm whoami` will show your npm username if you are logged in. Otherwise, please run `npm login`.

10. To publish the latest changes run `npm run publish` **Do not run `npm publish`!**

11. The CLI will ask for a confirmation about the new package versions. Please verify them carefully before accepting.

12. Once you have accepted, the script will start publishing the packages.

13. Finally, create a GitHub Release with the same text as the changelog generated at step 3. Add "useful links" section. Congratulations!
