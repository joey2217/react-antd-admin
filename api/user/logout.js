const Mock = require('mockjs')

module.exports = (req, res) => {
  res.status(200).json(Mock.mock({
    message: '退出成功!',
    date: Mock.Random.now(),
  }))
};
