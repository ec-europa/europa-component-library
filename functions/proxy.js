"use strict";

const fetch = require("node-fetch");

exports.handler = async (event) => {
  const params = event.queryStringParameters;
  const { Host, host, Origin, origin, ...headers } = event.headers;

  if (!params.url) {
    return {
      statusCode: 400,
      body: "Unable get url from 'url' query parameter",
    };
  }

  const requestParams = Object.entries(params)
    .reduce((acc, param) => {
      if (param[0] !== "url") acc.push(param.join("="));
      return acc;
    }, [])
    .join("&");

  const url = `${params.url}${requestParams}`;

  try {
    const res = await fetch(url, {
      method: event.httpMethod,
      timeout: 20000,
      headers,
    });

    const proxyResponse = {
      statusCode: res.status,
      headers: {
        "Access-Control-Allow-Origin": "*",
        ...res.headers,
      },
    };

    const body = await res.text();
    proxyResponse.body = body;

    return proxyResponse;
  } catch (err) {
    return {
      statusCode: 400,
      body: `An error ocurred: ${err.message}`,
    };
  }
};
