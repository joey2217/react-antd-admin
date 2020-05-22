const Mock = require('mockjs')

module.exports = (req, res) => {
  res.status(200).json(Mock.mock({
    name: Mock.Random.cname(),
    token: Mock.Random.guid(),
    message: '登录成功!'
  }))
};
