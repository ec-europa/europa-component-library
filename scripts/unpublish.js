const { execSync } = require('child_process');
const minimist = require('minimist');
const axios = require('axios');

const excludedPackages = [
  '@ec-europa/ecl-dialogs',
  '@hpcc-js/eclwatch',
  '@eui/ecl-styles',
  'snomed-ecl-builder',
  '@eui/ecl',
  '@eui/ecl-core',
];

async function fetchPackageNames(scope) {
  try {
    const response = await axios.get(
      `https://registry.npmjs.org/-/v1/search?text=${scope}/&size=250`,
    );
    return response.data.objects
      .filter((pkg) => !excludedPackages.includes(pkg.package.name))
      .map((pkg) => pkg.package.name);
  } catch (error) {
    console.error(
      'Error occurred while fetching package names:',
      error.message,
    );
    return [];
  }
}

async function unpublishPackages(scope, version, dryRun = true) {
  console.log(
    `Running npm unpublish ${dryRun ? 'with dry-run option...' : '...'} `,
  );
  const packageNames = await fetchPackageNames(scope);
  // eslint-disable-next-line no-restricted-syntax
  for (const packageName of packageNames) {
    const npmUnpublishCommand = `npm unpublish ${packageName}@${version}${
      dryRun ? ' --dry-run' : ''
    }`;
    if (dryRun) {
      console.log(`[Dry Run] Would have run: ${npmUnpublishCommand}`);
    } else {
      console.log(`Unpublishing ${packageName} @${version}`);
      execSync(npmUnpublishCommand);
    }
  }
}

function printUsage() {
  console.log(
    'Usage: node unpublish.js --scope <scope> --version <version> [--dry-run]',
  );
}

const args = minimist(process.argv.slice(2), {
  string: ['scope', 'version'],
  boolean: ['dry-run'],
  alias: { s: 'scope', v: 'version', d: 'dry-run' },
});

if (!args.scope || !args.version) {
  printUsage();
  process.exit(1);
}

unpublishPackages(args.scope, args.version, args['dry-run']);
