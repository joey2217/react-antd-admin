import { NowRequest, NowResponse } from '@vercel/node'
import { Random } from "mockjs";

module.exports = (request: NowRequest, response: NowResponse) => {
  const { username, password } = request.body
  if (username && password) {
    response.status(200).json({
      name: Random.last(),
      token: Random.guid(),
      message: '登录成功!'
    })
  } else {
    response.status(403).json({
      message: '登录失败!'
    })
  }
};
