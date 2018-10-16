# Contribution guidelines

## Git conventions

Please follow [our Git conventions](../docs/conventions/git.md) for naming your branches and commits.

## PR description

Please fill in the description following the template.

## Release process

1.  Each merged PR should be labeled with one of the [labels](https://github.com/ec-europa/europa-component-library/labels) named `tag: ...` to indicate what kind of change it is.

2.  Create a change log entry for the release:

    - You'll need an [access token for the GitHub API](https://help.github.com/articles/creating-an-access-token-for-command-line-use/). Save it to this environment variable: `export GITHUB_AUTH="..."`
    - Run `npm run changelog`. The command will find all the labeled pull requests merged since the last release and create a change log entry with all the changes and links to PRs and their authors. Copy and paste it to `CHANGELOG.md`.

3.  Merge the changelog update.

4.  Make sure you are logged in. `npm whoami` will show your npm username if you are logged in. Otherwise, please run `npm login`.

5.  Pull the latest `next-v2` branch.

6.  **Do not run `npm publish`. Instead, run `npm run publish`.**

7.  The CLI will ask for a confirmation about the new package versions. Please verify them carefully before accepting.

8.  Once you have accepted, the script will start publishing the packages to npm and creating the git tags.

9.  Finally, create a GitHub Release with the same text as the changelog generated at step 2.

10. Run `yarn dist:presets` from the root folder, then create zip archives with the different folders created in `./dist/packages` and attach those archives to the GitHub release.
