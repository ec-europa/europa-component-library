import oauth2 from "./oauth";

exports.handler = async (event) => {
  const { code } = event.queryStringParameters;

  try {
    const result = await oauth2.authorizationCode.getToken({ code });
    const token = oauth2.accessToken.create(result);

    const body = `
    <script>
      (function () {
        function receiveMessage(e) {
          window.opener.postMessage("authorization:github:success:${JSON.stringify(
            {
              token: token.token.access_token,
              provider: "github",
            }
          )}", e.origin);
          window.removeEventListener("message", receiveMessage, false);
        }
        window.addEventListener("message", receiveMessage, false);
        window.opener.postMessage("authorizing:github", "*");
      })();
    </script>
    `;

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "text/html",
      },
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
