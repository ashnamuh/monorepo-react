import pkg from './package.json'
import resolve from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import del from 'rollup-plugin-delete'
import postcss from 'rollup-plugin-postcss'
import path from 'path'

const extensions = ['.js', '.jsx', '.ts', '.tsx']

export default {
  input: 'src/index.ts',
  external: ['react', 'styled-components', 'react-dom', 'react-feather'],
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'esm'
    }
  ],
  plugins: [
    resolve({ extensions }),
    typescript({
      typescript: require('typescript')
    }),
    del({ targets: 'dist/*' }),
    postcss({
      extract: true,
      extract: path.resolve('dist/ash-ui.css')
    })
  ]
}
