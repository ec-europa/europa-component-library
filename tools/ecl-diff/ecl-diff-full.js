#!/usr/bin/env node

const eclDiffSystem = require('./ecl-diff-system.js');

const fullPackages = require(`@ecl-twig/ec-storybook/.storybook/packages.js`)
  .list;

let components = {};
// Get the argument from the command line.
const args = process.argv.slice(2);
// if none we work on the two systems (ec/eu).
const systems = args[0] ? [args[0]] : ['ec', 'eu'];

const getBase = (element) => {
  [, element] = element.split('ec-component-');
  return element;
};

// We build a list of components by their root name.
const packages = [];
fullPackages.forEach((pack) => {
  packages.push(getBase(pack));
});

// But we need to exclude some for each system.
const exclusions = [
  'inpage-navigation',
  'ecl-compliance',
  'contextual-navigation',
  'ec-components',
];
// And some only for EU.
const euExclusions = new Set([
  ...exclusions,
  'accordion',
  'footer',
  'menu-legacy',
]);

const ecPackages = packages.filter((el) => !exclusions.includes(el));
const euPackages = packages.filter((el) => !euExclusions.has(el));
ecPackages.pop();
euPackages.pop();
// We build our components object.
if (systems.length > 1) {
  components = { ec: ecPackages, eu: euPackages };
} else if (systems[0] === 'ec') {
  components = { ec: ecPackages };
} else {
  components = { eu: euPackages };
}
// If we are running the tools on the two systems we chain the promises
// to run them sequentially.
if (systems.length > 1) {
  systems
    .reduce(
      (callback, initialValue) =>
        callback.then(() => eclDiffSystem(initialValue, components)),
      Promise.resolve()
    )
    .then((res) => {
      console.log(
        `Ecl-diff-full task completed with a total of ${res[0].totalVariants} variants checked and ${res[0].totalMatches} perfect matches.`
      );
      process.exit(0);
    });
} else {
  eclDiffSystem(systems[0], components);
}
