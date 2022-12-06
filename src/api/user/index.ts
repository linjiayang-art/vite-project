import request from "@/utils/request";
import { AxiosPromise } from "axios";
import { UserInfo } from "@/api/user/types"; // 用户信息返回数据的TypeScript类型声明，文件路径 src/types/api/system/user.d.ts

export function getUserInfo():AxiosPromise<UserInfo>{
    return request({
        url:'http://127.0.0.1:9500/auth/oauth',
        method: 'get'
      
    })
}