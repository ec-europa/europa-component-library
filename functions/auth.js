import randomstring from "randomstring";
import oauth2 from "./oauth";

exports.handler = () => {
  const authorizationUri = oauth2.authorizationCode.authorizeURL({
    scope: process.env.SCOPES || "repo,user",
    state: randomstring.generate(32),
  });

  return {
    statusCode: 302,
    headers: {
      Location: authorizationUri,
      "Cache-Control": "no-cache",
    },
  };
};
