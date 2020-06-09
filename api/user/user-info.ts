import { NowRequest, NowResponse } from '@vercel/node'
import { Random } from "mockjs";
import { TOKEN_KEY } from '../type'

module.exports = (req: NowRequest, res: NowResponse) => {
  const token = req.headers[TOKEN_KEY]
  if (token) {
    res.status(200).json({
      name: Random.cname(),
      token: Random.guid(),
      userId: Random.natural(),
      message: '获取用户信息成功!',
      roles: ['admin', 'user'],
      avatar: Random.image('100x100', '#894FC4', '#FFF', 'png', 'Avatar')
    })
  } else {
    res.status(403).json({
      message: '无权限!',
    })
  }

};
