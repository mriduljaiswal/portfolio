import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Babel optimizations for better performance
      babel: {
        plugins: [
          // Remove console logs in production (when babel plugin is available)
          ...(process.env.NODE_ENV === 'production' ? [] : [])
        ]
      }
    })
  ],
  base: '/portfolio/',
  server: {
    port: 3000,
    open: true,
    // Performance optimizations for dev server
    hmr: {
      overlay: false // Reduce overhead
    }
  },
  build: {
    // Performance optimizations for build
    target: 'es2020',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.trace']
      },
      mangle: {
        safari10: true
      }
    },
    rollupOptions: {
      output: {
        // Code splitting for better performance
        manualChunks: {
          // Separate vendor chunk for better caching
          vendor: ['react', 'react-dom'],
          // Separate motion library for lazy loading
          motion: ['motion/react', 'framer-motion'],
          // Separate WebGL libraries
          webgl: ['ogl']
        },
        // Optimize chunk names
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    },
    // Increase chunk size warning limit for optimized chunks
    chunkSizeWarningLimit: 1000,
    // Enable source maps only in development
    sourcemap: process.env.NODE_ENV === 'development'
  },
  optimizeDeps: {
    // Pre-bundle dependencies for faster dev server startup
    include: [
      'react', 
      'react-dom', 
      'motion/react', 
      'framer-motion',
      'ogl',
      'clsx',
      'tailwind-merge'
    ],
    // Exclude large dependencies from pre-bundling if not needed immediately
    exclude: ['@types/node']
  },
  // Performance optimizations
  esbuild: {
    // Remove debugger statements in production
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : []
  }
})