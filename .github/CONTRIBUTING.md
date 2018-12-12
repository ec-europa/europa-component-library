# Contribution guidelines

## Git conventions

Please follow [our Git conventions](../docs/conventions/git.md) for naming your branches and commits.

## PR description

Please fill in the description following the template.

## Release process

1.  Each merged PR should be labeled with one of the [labels](https://github.com/ec-europa/europa-component-library/labels) named `tag: ...` to indicate what kind of change it is.

2.  Pull the latest `v2` branch.

3.  Create a change log entry for the release:

    - You'll need an [access token for the GitHub API](https://help.github.com/articles/creating-an-access-token-for-command-line-use/). Save it to this environment variable: `export GITHUB_AUTH="..."`
    - Run `npm run changelog`. The command will find all the labeled pull requests merged since the last release and create a change log entry with all the changes and links to PRs and their authors. Copy and paste it to `CHANGELOG.md`.

4.  Run `npm run update-version`. It will update the version number of the updated packages. Note: you might want to change the `bump` parameter in `lerna.json`. See: https://github.com/lerna/lerna/tree/master/commands/version#semver-bump

5.  Open a pull request with the changes. Don't apply any `tag: *` label on it.

6.  Merge the PR.

7.  Pull the latest `v2` branch.

8.  Make sure you are logged in. `npm whoami` will show your npm username if you are logged in. Otherwise, please run `npm login`.

9.  **Do not run `npm publish`. Instead, run `npm run publish`.**

10. The CLI will ask for a confirmation about the new package versions. Please verify them carefully before accepting.

11. Once you have accepted, the script will start publishing the packages.

12. Finally, create a GitHub Release with the same text as the changelog generated at step 3. Add "useful links" section. Congratulations!
