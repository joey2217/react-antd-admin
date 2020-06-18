import { NowRequest, NowResponse } from '@vercel/node'
import { Random } from "mockjs";
import { TOKEN_KEY,authList } from '../type'

module.exports = (request: NowRequest, response: NowResponse) => {
  const { pageNum, pageSize } = request.query;
  const num = Number(pageNum) || 1;
  const size = Number(pageSize) || 20;
  const token = request.headers[TOKEN_KEY]
  if (token) {
    response.status(200).json({
      message: '获取数据成功!',
      pageNum: num,
      pageSize: size,
      total: Random.integer(size, 100),
      list:authList,
    })
  } else {
    response.status(403).json({
      message: '无权限!',
      token,
      headers: request.headers,
    })
  }
};
