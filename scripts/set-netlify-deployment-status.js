#!/usr/bin/env node

const path = require('path');
const fetch = require('node-fetch');

const run = async () => {
  const {
    CI_BUILD_NUMBER,
    GH_TOKEN,
    DRONE_REPO,
    DRONE_COMMIT_SHA,
    DRONE_BUILD_LINK,
    NETLIFY_SITE,
    NETLIFY_AUTH_TOKEN,
  } = process.env;

  if (CI_BUILD_NUMBER) {
    console.info('Missing information about build number.');
    return;
  }

  if (!GH_TOKEN) {
    console.info("Won't be able to communicate Netlify deployment to Github.");
    console.info('GH_TOKEN environment variable is required!');
    return;
  }

  if (!DRONE_REPO || !DRONE_COMMIT_SHA) {
    console.info(
      'Current script depends on Drone CI 0.8 environment variables.'
    );
    console.info(
      'Please see https://0-8-0.docs.drone.io/environment-reference'
    );
    console.log('Required: DRONE_REPO, DRONE_COMMIT_SHA');
    return;
  }

  let payload = {};

  try {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    const deployments = require(path.resolve(__dirname, '../deployments.json'));

    const currentDeployment = deployments.find(
      deployment => deployment.title === `Drone build: 5645`
      // deployment => deployment.title === `Drone build: ${CI_BUILD_NUMBER}`
    );

    const siteDeployment = await fetch(
      `https://api.netlify.com/api/v1/sites/${NETLIFY_SITE}/deploys/${currentDeployment.id}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Accept-Charset': 'utf-8',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${NETLIFY_AUTH_TOKEN}`,
        },
      }
    );

    payload = {
      state: 'success',
      target_url: siteDeployment.deploy_url,
      description: 'Preview ready!',
      context: 'drone/netlify',
    };
  } catch (error) {
    payload = {
      state: 'error',
      target_url: DRONE_BUILD_LINK,
      description: 'Could not get data about Netlify deployment.',
      context: 'drone/netlify',
    };
  }

  // @see https://developer.github.com/v3/repos/statuses
  await fetch(
    `https://api.github.com/repos/${DRONE_REPO}/statuses/${DRONE_COMMIT_SHA}`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-Charset': 'utf-8',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${GH_TOKEN}`,
      },
      body: JSON.stringify(payload),
    }
  );
};

try {
  run();
} catch (error) {
  console.error(error);
}
