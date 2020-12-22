exports.handler = async (event) => {
  const { code } = event.queryStringParameters;

  try {
    const result = await oauth2.authorizationCode.getToken({ code });
    const token = oauth2.accessToken.create(result);
    console.log("accessToken", token);

    const body = `
      <script>
      (function() {
        function recieveMessage(e) {
          console.log("recieveMessage %o", e)
          // Send message to the main window.
          window.opener.postMessage(
            'authorization:github:success:${JSON.stringify({
              token: token.token.access_token,
              provider: "github",
            })}',
            e.origin
          )
        }
        window.addEventListener("message", recieveMessage, false)
        // Start handshare with parent
        window.opener.postMessage("authorizing:github", "*")
      })()
      </script>`;

    return {
      statusCode: 200,
      body,
    };
  } catch (error) {
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({
        error: error.message,
      }),
    };
  }
};
