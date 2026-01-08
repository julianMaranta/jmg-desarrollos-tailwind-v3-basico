import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // 🔥 IMPORTANTE: Configuración para AWS Amplify
  base: './', // Esto fuerza rutas relativas
  
  // Opción 1: Configuración básica para assets
  publicDir: 'public', // Asegura que la carpeta public sea copiada
  
  build: {
    // Configuración de assets
    assetsDir: 'assets',
    
    // Optimización para videos e imágenes grandes
    assetsInlineLimit: 4096, // Archivos menores a 4KB se inlinenan
    
    rollupOptions: {
      output: {
        // Manejo seguro de assets
        assetFileNames: (assetInfo) => {
          // Verificación segura del nombre
          if (!assetInfo || !assetInfo.name) {
            return 'assets/[name]-[hash][extname]'
          }
          
          const name = assetInfo.name
          const ext = name.split('.').pop()?.toLowerCase() || ''
          
          // Maneja diferentes tipos de assets
          if (['mp4', 'webm', 'ogg', 'mov', 'avi'].includes(ext)) {
            return `assets/videos/[name]-[hash][extname]`
          }
          
          if (['png', 'jpg', 'jpeg', 'svg', 'gif', 'bmp', 'webp', 'ico'].includes(ext)) {
            return `assets/images/[name]-[hash][extname]`
          }
          
          if (['woff', 'woff2', 'ttf', 'eot', 'otf'].includes(ext)) {
            return `assets/fonts/[name]-[hash][extname]`
          }
          
          return `assets/[name]-[hash][extname]`
        },
        
        // Mantiene chunk names consistentes
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      }
    },
    
    // Optimización para producción
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    
    // Reporte de bundle
    reportCompressedSize: true,
    
    // Source maps para debugging (opcional en producción)
    sourcemap: false,
    
    // Empty outDir en cada build
    emptyOutDir: true
  },
  
  // Configuración del servidor de desarrollo
  server: {
    port: 3000,
    host: true, // Escucha en todas las interfaces
    open: true, // Abre navegador automáticamente
    headers: {
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Cross-Origin-Opener-Policy': 'same-origin',
    }
  },
  
  // Previsualización de producción
  preview: {
    port: 4173,
    host: true
  }
})