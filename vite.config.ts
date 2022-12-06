import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {UserConfig, ConfigEnv, loadEnv} from 'vite'
import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

export default ({command, mode}: ConfigEnv): UserConfig => {
  // 获取 .env 环境配置文件
  const env = loadEnv(mode, process.cwd())

  return (
      {
          plugins: [
              vue(),
               createSvgIconsPlugin({
                // 指定需要缓存的图标文件夹
                iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
                // 指定symbolId格式
                symbolId: 'icon-[dir]-[name]',
            })
          ],
          
          // 本地反向代理解决浏览器跨域限制
          server: {
              host: 'localhost', 
              port: Number(env.VITE_APP_PORT), 
              open: false, // 启动是否自动打开浏览器
              proxy: {
                  [env.VITE_APP_BASE_API]: { 
                      target: 'localhost', // 跨域接口
                      changeOrigin: true,
                      rewrite: path => path.replace(new RegExp('^' + env.VITE_APP_BASE_API), '')
                  }
              }
          },
          resolve: {
              alias: {
                  "@": path.resolve("./src") // 相对路径别名配置，使用 @ 代替 src
              }
          }
      }
  )
}