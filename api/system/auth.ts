import { NowRequest, NowResponse } from '@vercel/node'
import { TOKEN_KEY,authList } from '../type'

module.exports = (request: NowRequest, response: NowResponse) => {
  const token = request.headers[TOKEN_KEY]
  if (token) {
    response.status(200).json({
      message: '获取数据成功!',
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
