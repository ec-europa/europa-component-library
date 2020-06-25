#!/usr/bin/env node

const fetch = require('node-fetch');

const run = async () => {
  const NETLIFY_API = 'https://api.netlify.com/api/v1';

  const { NETLIFY_SITE_ID, NETLIFY_AUTH_TOKEN } = process.env;
  const isRunningOnGithub = process.env.GITHUB_ACTIONS;
  // GITHUB_TOKEN is provided by default on Github Actions, no need to set in manually anywwhere.
  const token = isRunningOnGithub
    ? process.env.GITHUB_TOKEN
    : process.env.GH_TOKEN;
  const buildNumber = isRunningOnGithub
    ? process.env.GITHUB_RUN_ID
    : process.env.DRONE_BUILD_NUMBER;
  const repo = isRunningOnGithub
    ? process.env.GITHUB_REPOSITORY
    : process.env.DRONE_REPO;
  const commitSha = isRunningOnGithub
    ? process.env.COMMIT_SHA
    : process.env.DRONE_COMMIT_SHA;
  // Use Checks API if to build path to a given run
  // @see https://developer.github.com/v3/checks/runs/
  let targetUrl = isRunningOnGithub ? '' : process.env.DRONE_BUILD_LINK;
  const context = isRunningOnGithub
    ? 'github-actions/netlify-preview'
    : 'drone/netlify-preview';

  if (!buildNumber) {
    console.error('Missing information about build number.');
    return;
  }

  if (!token) {
    console.info("Won't be able to communicate Netlify deployment to Github.");
    console.error('Auth token is required!');
    return;
  }

  if (!repo || !commitSha) {
    console.error('Missing information about repository or commit');
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

    const pattern = isRunningOnGithub
      ? `Github Actions Run: ${buildNumber}`
      : `Drone build: ${buildNumber}`;
    const currentDeployment = deployments.find(
      deployment => deployment.title === pattern
    );

    if (!currentDeployment) {
      payload = {
        context,
        state: 'failure',
        description: 'No deployment on Netlify matching current pull request.',
      };

      await fetch(
        `https://api.github.com/repos/${repo}/statuses/${commitSha}`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Accept-Charset': 'utf-8',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        }
      );

      return;
    }

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

    if (siteDeployment && siteDeployment.deploy_ssl_url) {
      targetUrl = siteDeployment.deploy_ssl_url;
    }

    payload = {
      context,
      state: 'success',
      target_url: targetUrl,
      description: 'Preview ready!',
    };
  } catch (error) {
    payload = {
      context,
      state: 'error',
      target_url: targetUrl,
      description: 'Could not get data about Netlify deployment.',
    };
  }

  // @see https://developer.github.com/v3/repos/statuses
  await fetch(`https://api.github.com/repos/${repo}/statuses/${commitSha}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-Charset': 'utf-8',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  console.log('Status on pull request successfully updated!');
};

try {
  run();
} catch (error) {
  console.error(error);
}
