// const awsAccessId = process.env.AWS_ACCESS_ID;
// const awsAccessKey = process.env.AWS_ACCESS_KEY;
// const branch = process.env.TRAVIS_PULL_REQUEST_BRANCH; // "" if a direct push
const prNum = process.env.TRAVIS_PULL_REQUEST; // false if a direct push

const create = require('s3-website').s3site;

create(
  {
    domain: `ecl-${prNum}`, // required, will be the bucket name
    region: 'eu-central-1', // optional, default: us-east-1
    index: 'index.html', // optional index document, default: index.html
    error: '404.html', // optional error document, default: none
  },
  (err, website) => {
    if (err) {
      throw err;
    }
    console.log(`${website} deployed!`);
  }
);
