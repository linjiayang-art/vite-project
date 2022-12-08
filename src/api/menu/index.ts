import request from '@/utils/request';
import { AxiosPromise } from 'axios';
import { MenuQuery, Menu, Resource, MenuForm } from './types';

/**
 * 获取路由列表
 */
export function listRoutes() {
  return request({
    url: 'http://127.0.0.1:9500/auth/router',
    method: 'get'
  });
}
