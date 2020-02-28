import Mock from 'mockjs';
import { XMLHttpRequest } from './index';

Mock.mock('/api/login', 'post', function (options: XMLHttpRequest): Object {
  return Mock.mock({
    'token|1-100': 100
  })
});