#!/usr/bin/env node

const fetch = require('node-fetch');

const run = async () => {
  const NETLIFY_API = 'https://api.netlify.com/api/v1';

  const {
    GH_TOKEN,
    BRANCH_NAME,
    GITHUB_RUN_ID,
    GITHUB_REPOSITORY,
    COMMIT_SHA,
    NETLIFY_SITE_ID,
    NETLIFY_AUTH_TOKEN,
  } = process.env;

  console.log('BRANCH_NAME', BRANCH_NAME);

  if (!GITHUB_RUN_ID) {
    console.info('Missing information about build number.');
    return;
  }

  if (!GH_TOKEN) {
    console.info("Won't be able to communicate Netlify deployment to Github.");
    console.info('GH_TOKEN environment variable is required!');
    return;
  }

  if (!GITHUB_REPOSITORY || !COMMIT_SHA) {
    console.error('Missing required environment variables.');
    console.info(
      'Please see https://help.github.com/en/actions/configuring-and-managing-workflows/using-environment-variables'
    );
    console.log('Required: GITHUB_REPOSITORY, COMMIT_SHA');
    return;
  }

  let payload = {};

  try {
    const deploymentsResponse = await fetch(
      `${NETLIFY_API}/sites/${NETLIFY_SITE_ID}/deploys`,
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

    const deployments = await deploymentsResponse.json();

    const currentDeployment = deployments.find(
      deployment => deployment.title === `Github Actions Run: ${GITHUB_RUN_ID}`
    );

    if (!currentDeployment) {
      payload = {
        state: 'failure',
        description: 'Deployment status was not possible to retrieve.',
        context: 'github_actions/netlify_preview',
      };
    } else {
      const siteDeploymentResponse = await fetch(
        `${NETLIFY_API}/sites/${NETLIFY_SITE_ID}/deploys/${currentDeployment.id}`,
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

      const siteDeployment = await siteDeploymentResponse.json();

      payload = {
        state: 'success',
        target_url: siteDeployment.deploy_ssl_url,
        description: 'Preview ready!',
        context: 'github_actions/netlify_preview',
      };
    }
  } catch (error) {
    payload = {
      state: 'error',
      description: 'Could not get data about Netlify deployment.',
      context: 'github_actions/netlify_preview',
    };
  }

  console.log('GITHUB_REPOSITORY', GITHUB_REPOSITORY);
  console.log(
    `https://api.github.com/repos/${GITHUB_REPOSITORY}/statuses/${COMMIT_SHA}`
  );

  // @see https://developer.github.com/v3/repos/statuses
  const reply = await fetch(
    `https://api.github.com/repos/${GITHUB_REPOSITORY}/statuses/${COMMIT_SHA}`,
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

  console.log('reply', reply);

  console.log('Status on pull request successfully updated!');
};

try {
  run();
} catch (error) {
  console.error(error);
}
