import { NowRequest, NowResponse } from '@vercel/node'
import { Random } from "mockjs";
import { TOKEN_KEY } from '../type'

module.exports = (req: NowRequest, res: NowResponse) => {
  const token = req.headers[TOKEN_KEY]
  res.status(200).json({
    message: '退出成功!',
    date: Random.now('second'),
    token,
    headers:req.headers,
  })
};
