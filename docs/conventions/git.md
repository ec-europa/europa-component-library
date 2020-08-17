# Git Commit Guidelines

ECL used to have [commitlint](https://commitlint.js.org/#/) integrated in order to enforce strict rules on ECL commits' history. However, this approach did not prove useful/effective enough for welcoming external contributors and newcomers.

This is the reason why commit rules and guidelines are documented below as suggestions and they are not blocking. The following guideline leads to **more readable messages** that are easy to follow when looking through the **project history**.

## Commit Message Format

Each commit message consists of a **header**, a **body** and a **footer**. The header has a special format that includes a **type**, a **scope** and a **subject**:

```git
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** and **scope** are the most important items of the commit as they are the first thing a user sees when browsing the git history. Please note that any line of the commit message is recommended to be **maximum 100 characters**! This allows the message to be easier to read on GitHub as well as in various git tools.

## Revert

In rare occasions when a commit reverts a previous commit, it should begin with `revert:`, followed by the header of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

## Type

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests
- **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation

## Scope

The scope is usually a given component, utility or any other element under change:

- `feat(accordion3): add 3rd iteration of the accordion component`
- `refactor(accordion): improve JavaScript API`
- `chore(drone): improve CI/CD pipelines`

## Subject

The subject contains succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize first letter
- no dot (.) at the end

## Body

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes". The body can include the motivation for the change and contrast this with previous behavior.

## Footer

The footer should contain any information about **Breaking Changes** and is also the place to reference GitHub issues that this commit **Closes**.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.

## Github

The github respository of ECL integrates with [Semantic Pull Requests](https://probot.github.io/apps/semantic-pull-requests/) which enforces that at least the title of each pull request commit reaches the main branch following a set of the above-mentioned rules.

Default merge strategy for pull requests on ECL github repository is [squash merge](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges#squash-and-merge-your-pull-request-commits).

## Closing words

It's worth mentioning once again that although these conventions are not enforced in a blocking manner, they are followed by many open-source projects and increase readability of commit history which is vital for the continuation of the project in long-term.
