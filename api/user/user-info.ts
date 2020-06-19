import { NowRequest, NowResponse } from '@vercel/node'
import { Random } from "mockjs";
import { TOKEN_KEY } from '../type'

module.exports = (req: NowRequest, res: NowResponse) => {
  const token = req.headers[TOKEN_KEY]
  if (token) {
    res.status(200).json({
      name: Random.last(),
      token: Random.guid(),
      userId: Random.natural(),
      message: '获取用户信息成功!',
      roles: ['admin', 'user'],
      avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png'
    })
  } else {
    res.status(403).json({
      message: '无权限!',
      token,
      headers:req.headers,
    })
  }

};
