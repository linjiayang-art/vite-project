import { defineStore } from "pinia";
import { UserState } from "@/store/modules/types"; // 用户state的TypeScript类型声明，文件路径 src/types/store/user.d.ts
import {getUserInfo} from '@/api/user'


const useUserStore=defineStore({
    id:"user",
    state:():UserState=>({
        name:'',
        token:'',
        avatar:'',
        introduction:''
        //roles:[],
        //perms:[]
    }),
   actions: {
         /**
     *  获取用户信息（昵称、头像、角色集合、权限集合）
     */
    test(){
      this.name="hello"
    },
    getUserInfo() {
      return new Promise((resolve, reject) => {
        getUserInfo()
          .then(({ data }) => {
            const { name, token, avatar, introduction } = data;
            this.name = name;
            this.token = token;
            this.avatar = avatar;
            this.introduction = introduction;
            resolve(data);
          })
          .catch(error => {
            reject(error);
          });
      });
    },
      } 
})

//导出模板
export default useUserStore;

