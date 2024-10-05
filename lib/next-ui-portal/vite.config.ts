/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference types='vitest' />
import { defineConfig, type LibraryFormats } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { join as pathJoin } from 'node:path'
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'
import packageJson from './package.json'

const projectRoot = pathJoin(__dirname, '..', '..')
const srcDirname = 'src'
const fileName = 'index'
const entry = `${srcDirname}/${fileName}.ts`
const formats: LibraryFormats[] = ['es', 'cjs']

export default defineConfig({
  root: __dirname,
  cacheDir: pathJoin(projectRoot, 'node_modules/.vite/kiochan/next-ui-portal'),

  plugins: [
    react(),
    nxViteTsPaths(),
    dts({
      entryRoot: 'src',
      tsconfigPath: pathJoin(__dirname, 'tsconfig.lib.json'),
    }),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  // Configuration for building your library.
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    outDir: pathJoin(projectRoot, 'dist/next-ui-portal'),
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    terserOptions: {
      format: {
        comments: true, // keep comments
      },
    },
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry,
      name: packageJson.name,
      // Change this to the formats you want to support.
      // Don't forget to update your package.json as well.
      formats,
    },

    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        /^@nx/,
        'nx',
        '@nextui-org/react',
        '@nextui-org/system',
        '@nextui-org/theme',
      ],
      output: formats.map((format) => ({
        format,
        preserveModules: true,
        entryFileNames: (chunkInfo) => {
          return `${chunkInfo.name}.${format === 'es' ? 'js' : 'cjs'}`
        },
      })),
    },
  },
})
