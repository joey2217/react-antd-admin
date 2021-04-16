import { NowRequest, NowResponse } from "@vercel/node";

module.exports = (request: NowRequest, response: NowResponse) => {
  response.status(200).send("Hello from useRequest!");
};
