import { defineConfig,loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({mode })=>{  
  const env = loadEnv(mode, process.cwd(), ''); 
  return{
    plugins: [react()],
    define:{
        'VITE_API_KEY': JSON.stringify(env.VITE_API_KEY)
    
      }
  }
})
