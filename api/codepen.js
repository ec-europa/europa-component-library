exports.handler = async function (event, context) {
  console.log('event', JSON.stringify(event));
  console.log('context', JSON.stringify(context));

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello World' }),
  };
};
