const fs = require("fs");
const path = require("path");
const glob = require("glob");

// options is optional
glob.sync("**/*.html").forEach(file => {
  fs.writeFileSync(
    path.resolve(file),
    `<!DOCTYPE html>
<meta charset="utf-8">
<title>Redirecting ...</title>
<meta http-equiv="refresh" content="0; URL=https://ec.europa.eu/component-library/">
<link rel="canonical" href="https://ec.europa.eu/component-library/">
`
  );
});
