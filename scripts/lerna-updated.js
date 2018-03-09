const { getUpdatedPackages } = require('./utils/getUpdatedPackages');

const lernaUpdated = async () => {
  const updatedPackages = await getUpdatedPackages();
  console.log(updatedPackages);

  if (!updatedPackages || updatedPackages.length === 0) {
    process.exit(1);
  }

  process.exit(0);
};

lernaUpdated();
