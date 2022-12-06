import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { ElMessage, ElMessageBox } from "element-plus";
import { localStorage } from "@/utils/storage";

//创建一个实例
const service = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 50000,
    headers: { 'Content-Type': 'application/json;charset=utf-8' }
})


export default service