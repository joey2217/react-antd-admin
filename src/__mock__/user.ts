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
    userId: Mock.Random.natural(),
    message: '获取用户信息成功!',
    roles: ['admin', 'user'],
    avatar: Mock.Random.image('100x100', '#894FC4', '#FFF', 'png', 'Avatar'),
  })
});

Mock.mock('/api/user/logout', 'post', function (options: XMLHttpRequest): Object {
  return Mock.mock({
    message: '退出成功!',
    date: Mock.Random.now('second'),
  })
});