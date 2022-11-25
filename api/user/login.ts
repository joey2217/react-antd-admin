import { VercelRequest, VercelResponse } from '@vercel/node'
import { Random } from 'mockjs'

export default function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  const { username, password } = request.body
  if (username && password) {
    response.status(200).json({
      name: Random.last(),
      token: Random.guid(),
      message: '登录成功!',
    })
  } else {
    response.status(403).json({
      message: '登录失败!',
    })
  }
}
