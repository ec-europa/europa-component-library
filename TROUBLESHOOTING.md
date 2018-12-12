# Troubleshooting

**Run `yarn` or `npm update` twice and ensure no errors _before_ creating an
issue!**

This document will help you check for common issues and make sure your issue has
not already been reported.

## Check to see if the issue has been reported

Search the
[history of changes](https://github.com/ec-europa/europa-component-library/pulls)
and [issues](https://github.com/ec-europa/europa-component-library/issues) to
see if someone else has already reported or solved the same issue.

## Create an issue

Submit your issues at jira board of "INNO global".

## Common issues

Here's a comprehensive list of possible issues you might encounter at this
stage.

### Potential issues with nvm

While installing nvm pay attention to the way you're going to run the install script basing on the shell of your preference, so that the conf is exported in the right config file.
Mind also the fact that if you changed the folder for the globally installed node packages in order to get rid of permissions issues (something like [this](https://github.com/sindresorhus/guides/blob/master/npm-global-without-sudo.md)) `nvm` will need you to override the prefix for node:

```
nvm is not compatible with the npm config "prefix" option
```

If this is the case you have to delete and recreate the prefix with the chosen version of node in order to use `nvm`:

```bash
npm config delete prefix
```

```bash
npm config set prefix $NVM_DIR/versions/node/{your version}
```

As a general remark _it is advised not to mix package managers in order to avoid resolution inconsistencies caused by unsynchronized lock files_ as taken from the notice yarn is going to show in case you have a package-lock.json in the root of your project.

### Error: Missing binding

Happens sometimes on `npm start` especially if phantomjs installation has
failed. It's a [known issue](https://github.com/sass/node-sass/issues/1527) with
`node-sass`. Run the following command to fix the issue: `npm rebuild node-sass`
