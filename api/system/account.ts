import { VercelRequest, VercelResponse } from '@vercel/node'
import { Random } from 'mockjs'
import { TOKEN_KEY, Account, Role } from '../type'

export default function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  const { pageNum, pageSize } = request.query
  const num = Number(pageNum) || 1
  const size = num === 9 ? 5 : Number(pageSize) || 10
  const list: Account[] = []
  const roles: Role[] = ['admin', 'user']
  let id = Random.natural(100, 200)
  const token = request.headers[TOKEN_KEY]
  if (token) {
    for (let i = 0; i < size; i++) {
      const start = Random.integer(0, roles.length)
      const end = Random.integer(start, roles.length)
      list.push(
        new Account(
          id++,
          Random.name(),
          Random.last(),
          Random.integer(0, 1),
          roles.slice(start, end)
        )
      )
    }
    response.status(200).json({
      message: '获取数据成功!',
      pageNum: num,
      pageSize: size,
      total: 85,
      list,
    })
  } else {
    response.status(403).json({
      message: '无权限!',
      token,
      headers: request.headers,
    })
  }
}
