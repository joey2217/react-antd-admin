import { NowRequest, NowResponse } from '@vercel/node'
import { Random } from "mockjs";
import { TOKEN_KEY } from '../type'

module.exports = (request: NowRequest, response: NowResponse) => {
  const { ids } = request.query;
  const idList = (ids as string).split(',')
  const token = request.headers[TOKEN_KEY]
  if (token) {
    const flag = Math.random() > 0.2;
    if (flag) {
      response.status(200).json({
        message: `删除ID${idList.join()}数据成功!`,
        date: Random.now('second'),
      })
    } else {
      response.status(500).json({
        message: `删除ID${idList.join()}数据失败!`,
        date: Random.now('second'),
      })
    }
  } else {
    response.status(403).json({
      message: '无权限!',
      token,
      headers: request.headers,
    })
  }
};
