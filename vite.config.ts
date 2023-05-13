import { defineConfig } from 'vite'
import path from 'node:path'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'react-lib-moris',
      formats: ['es', 'umd'],
      fileName: (format) => `react-lib-moris.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'reactDOM'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
})
