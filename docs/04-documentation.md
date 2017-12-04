---
title: How to update documentation on ECL
label: Edit documentation
---

This page explains how to update documentation directly on GitHub.

## Prerequisite

If you don't already have a GitHub account, make sure to create one and log in
with it.\
You also have to be part of team [ECL doc editors](https://github.com/orgs/ec-europa/teams/ecl-doc-editors/).

## Step 1: Open documentation file

* Go to [ECL repository](https://github.com/ec-europa/europa-component-library)
* Locate the component you wish to edit. Components are located in
  `framework/components`
* Open the README.md file in that component (example:
  `framework/components/ecl-footers/README.md`)

![GitHub edit]({{ path '/assets/screenshots/git_edit.png' }})

## Step 2: Edit the documentation

* Click on the edit button (pencil icon on top right)
* Make any modification you wish by using markdown editor. Here is a
  [cheatsheet for markdown syntax](https://guides.github.com/features/mastering-markdown/)
* You can see result directly by switching to the "Preview" tab

![GitHub preview]({{ path '/assets/screenshots/git_preview.png' }})

## Step 3: Send your modifications

* Once you have modified the file, it has to be sent to us. To do so, still on
  the edit page, scroll down to the "Commit changes" form
* Optionally, enter a description for your modifications.
* Make sure that the "Create a new branch" option is selected. You can keep
  default name for the branch.
* Click on "Propose file change". You are directed to a page to open a pull
  request.
* Just click on "Create pull request", title or description can stay as is, or
  you can set it according to our writing convention for quickest integration
  (see below).

## It's done!

Your pull request will be handled by our team and integrated to master ECL
branch.\
Thank you!

---

### Note: writing convention

We are using writing conventions for both
[pull requests](https://ec-europa.github.io/europa-component-library/docs/conventions/git)
and
[markdown](https://ec-europa.github.io/europa-component-library/docs/conventions/markdown).
You can optionally apply these conventions, to facilitate documentation update
process.\
In any case, we will have to apply the conventions on our side before publishing
it (so the content may be slightly modified).
