import { NowRequest, NowResponse } from '@vercel/node'
import { Random } from "mockjs";

module.exports = (request: NowRequest, response: NowResponse) => {
  const { id } = request.query;
  const flag = Math.random() > 0.2;
  if (flag) {
    response.status(200).json({
      message: `删除ID${id}数据成功!`,
      date: Random.now('second'),
    })
  } else {
    response.status(500).json({
      message: `删除ID${id}数据失败!`,
      date: Random.now('second'),
    })
  }
};
