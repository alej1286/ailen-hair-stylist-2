const awsServerlessExpress = require("aws-serverless-express");
const app = require("./app");

/**
 * @type {import('http').Server}
 */
const server = awsServerlessExpress.createServer(app);

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event, context) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  try {
    await app.refreshtoken();
    console.log("Token refreshed successfully:");
  } catch (error) {
    console.error("Error refreshing token:", error);
  }
  return awsServerlessExpress.proxy(server, event, context, "PROMISE").promise;
};
