import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],

  //to change the server and connect to postman, applications keeps on running in localhost:5173
  server:{
    proxy: {
      '/api':{
        target: 'http://localhost:8080',
      changeOrigin:true}
    }
  }
})
