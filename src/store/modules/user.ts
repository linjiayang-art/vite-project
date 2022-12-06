import { defineStore } from "pinia";
import { UserState } from "@/store/modules/types"; // 用户state的TypeScript类型声明，文件路径 src/types/store/user.d.ts

const useUserStore=defineStore({
    id:"user",
    state:():UserState=>({
        token:'111',
        name:'111',
        avater:'111',
        //roles:[],
        //perms:[]
    }),
/*     actions: {
        getUserInfo() {
            return new Promise(((resolve, reject) => {
            ...
            resolve(data)
            ...
          }))
        }
      } */
})

//导出模板
export default useUserStore;

