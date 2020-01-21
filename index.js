const fs = require("fs");
const path = require("path");
const glob = require("glob");

const v1 = "v1.15.0";
const root = "https://ec.europa.eu/component-library/";

const createRedirect = (target = root) => {
  return `<!DOCTYPE html>
<meta charset="utf-8">
<title>Redirecting ...</title>
<meta http-equiv="refresh" content="0; URL=${target}">
<link rel="canonical" href="${target}">
`;
};

const exceptions = ["eu-component-site-header", "eu-component-footer"];

glob
  .sync(`**/!(${exceptions.join("|")}).html`)
  .forEach(file => fs.writeFileSync(path.resolve(file), createRedirect()));

glob
  .sync(`eu/components/detail/*(${exceptions.join("|")}).html`)
  .forEach(component =>
    fs.writeFileSync(
      path.resolve(component),
      createRedirect(`${root}${v1}/${component.replace(".html", "/")}`)
    )
  );
