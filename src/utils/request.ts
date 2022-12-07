import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { ElMessage, ElMessageBox } from "Element-plus";
import { localStorage } from "@/utils/storage";

//创建一个实例
const service = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 50000,
    headers: { 'Content-Type': 'application/json;charset=utf-8' }
})



// 响应拦截器
service.interceptors.response.use(
    (response: AxiosResponse) => {
        console.log(response.data)
      const { code, msg } = response.data;
      console.log('code='+code)
      if (code === 200) {
        return response.data;
      } else {
        // 响应数据为二进制流处理(Excel导出)
        if (response.data instanceof ArrayBuffer) {
          return response;
        }
        ElMessage({
          message: msg || '系统出错',
          type: 'error'
        });
        return Promise.reject(new Error(msg || 'Error'));
      }
    },
    (error: any) => {
      if (error.response.data) {
        const { code, msg } = error.response.data;
        // token 过期,重新登录
        if (code === 'A0230') {
          ElMessageBox.confirm('当前页面已失效，请重新登录', '提示', {
            confirmButtonText: 'OK',
            type: 'warning'
          }).then(() => {
            localStorage.clear();
            window.location.href = '/';
          });
        } else {
          ElMessage({
            message: msg || '系统出错',
            type: 'error'
          });
        }
      }
      return Promise.reject(error.message);
    }
  );


export default service