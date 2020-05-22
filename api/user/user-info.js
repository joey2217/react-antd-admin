const Mock = require('mockjs')

module.exports = (req, res) => {
  res.status(200).json(Mock.mock({
    name: Mock.Random.cname(),
    token: Mock.Random.guid(),
    userId:Mock.Random.natural(),
    message: '获取用户信息成功!',
    roles: ['admin', 'user'],
    avatar: Mock.Random.image('100x100', '#894FC4', '#FFF', 'png', 'Avatar')
  }))
};
