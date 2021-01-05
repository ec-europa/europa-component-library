DOCKER_ID=$(docker run -d --rm \
  -p 9222:3000 \
  -e "CONNECTION_TIMEOUT=600000" \
  -v $STORYBOOK_DIR/build:/opt/storybook-static \
  browserless/chrome)

yarn jest storyshots.test.js --useStderr --update-snapshot

docker kill $DOCKER_ID
