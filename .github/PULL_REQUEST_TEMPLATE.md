# PR description

Please drop a few lines about the PR: what it does, how to test it, etc.

## QA Checklist

In order to ensure a safe and quick review, please check that your PR follow those guidelines:

- [ ] `package.json` is up-to-date and `@ecl/[system]-base` is part of the dependencies
- [ ] I have checked the dependencies
- [ ] I have given the fractal status “ready” to my component
- [ ] I have declared `@define mycomponent` in the SCSS file
- [ ] I have specified `margin: 0;` on the CSS component
- [ ] I have provided tests
- [ ] I follow the naming guidelines
- [ ] the component supports composition
- [ ] there are no hardcoded strings (all content come from the context)
- [ ] I have filled the README.md file (at least a few lines)
- [ ] My component is listed in the root README
- [ ] My PR has the right label(s)
- [ ] The redirects in `src/website/src/routes/Redirects.jsx` are up-to-date
