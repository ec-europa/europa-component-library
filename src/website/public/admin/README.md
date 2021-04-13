# Local development

1.  Run: `yarn netlify-cms-proxy-server`

2.  Remove the comment in the line 15 of the config.yml file in this folder:
    `#local_backend: true`

So that it becomes:
`local_backend: true`

3.  You can then access the cms after running:
    `yarn start:website`

at `localhost:8080/admin`

and clicking login.

The changes you will make to the files through the cms will be immediately "published", if you wish to do so, in your local filesystem, with no impact on the github repository.

#### Pay attention not to commit and push changes made for testing purposes as well as the removal of the comment at the step n.2
