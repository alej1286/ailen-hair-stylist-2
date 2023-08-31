/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

/* Amplify Params - DO NOT EDIT
ENV
REGION
userid
token
Amplify Params - DO NOT EDIT */

const express = require("express");
const bodyParser = require("body-parser");
const awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");
const axios = require("axios").default;

// declare a new express app
const app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());
const user_id = process.env.userid;
const access_token = process.env.token;

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

/**********************
 * Example get method* *
 **********************/
/* app.get("/items", async function (req, res) {
  // Add your code here
  //res.json({ success: "get call succeed!", url: req.url });
  //`https://graph.instagram.com/${user_id}/media?fields=media_type,permalink,media_url&access_token=${access_token}`
  //`https://graph.instagram.com/${user_id}?access_token=${access_token}&fields=media_url,permalink`
  //`https://v1.nocodeapi.com/alej1286/instagram/DjvHJlfbHHYkiLne`
  const r = await axios
    .get(
      `https://graph.instagram.com/${user_id}/media?access_token=${access_token}`
    )
    .then((response) => {
      res.json({
        error: null,
        response,
      });
    })
    .catch((err) => {
      res.json({
        error: err,
        response: null,
      });
    });

 // console.log(r);
}); */

app.get("/items", function (req, res) {
  const query = req.query;
  //const r = await axios
  axios
    .get(
      `https://graph.instagram.com/${user_id}/media?access_token=${access_token}`
      //`https://reqres.in/api/users`
    )
    .then((response) => {
      res.json({
        url: req.url,
        response,
        event: req.apiGateway.event, // to view all event data
        query: query,
      });
      console.log("response", response);
    })
    .catch((err) => {
      res.json({
        err,
        url: req.url,
        event: req.apiGateway.event, // to view all event data
        query: query,
      });
      console.log("err", err);
    });

  // console.log(r);

  /* const people = [{ name: "aaaaa" }, { name: "bbbbbbb" }];
  res.json({
    success: "get call succeed!",
    url: req.url,
    people,
  }); */
});

app.get("/items/*", function (req, res) {
  // Add your code here
  res.json({ success: "get call succeed!", url: req.url });
});

/****************************
 * Example post method *
 ****************************/

app.post("/items", function (req, res) {
  // Add your code here
  res.json({ success: "post call succeed!", url: req.url, body: req.body });
});

app.post("/items/*", function (req, res) {
  // Add your code here
  res.json({ success: "post call succeed!", url: req.url, body: req.body });
});

/****************************
 * Example put method *
 ****************************/

app.put("/items", function (req, res) {
  // Add your code here
  res.json({ success: "put call succeed!", url: req.url, body: req.body });
});

app.put("/items/*", function (req, res) {
  // Add your code here
  res.json({ success: "put call succeed!", url: req.url, body: req.body });
});

/****************************
 * Example delete method *
 ****************************/

app.delete("/items", function (req, res) {
  // Add your code here
  res.json({ success: "delete call succeed!", url: req.url });
});

app.delete("/items/*", function (req, res) {
  // Add your code here
  res.json({ success: "delete call succeed!", url: req.url });
});

app.listen(3000, function () {
  console.log("App started");
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
