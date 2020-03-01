import Mock from 'mockjs';
import { XMLHttpRequest } from './index';

Mock.mock('/api/user/login', 'post', function (options: XMLHttpRequest): Object {
  return Mock.mock({
    name: Mock.Random.cname(),
    token: Mock.Random.guid(),
    message: '登录成功!'
  })
});
Mock.mock('/api/user/user-info', 'post', function (options: XMLHttpRequest): Object {
  return Mock.mock({
    name: Mock.Random.cname(),
    token: Mock.Random.guid(),
    message: '获取用户信息成功!'
  })
});