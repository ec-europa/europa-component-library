# Local development

1.  Run `cd src/website`

2.  Run: `pnpm netlify-cms-proxy-server`

3.  Remove the comment in the line 15 of the config.yml file in this folder:
    `#local_backend: true`

So that it becomes:
`local_backend: true`

4.  You can then access the cms after running:
    `pnpm start:website`

at `localhost:8080/admin/index.html`

and clicking login.

The changes you will make to the files through the cms will be immediately "published", if you wish to do so, in your local filesystem, with no impact on the github repository.

#### Pay attention not to commit and push changes made for testing purposes as well as the removal of the comment at the step n.2
