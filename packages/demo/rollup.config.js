/*
 * @Author: XunL
 * @Description: 
 */
import typescript from 'rollup-plugin-typescript2'
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'
import { terser } from 'rollup-plugin-terser'
import nodeResolve from 'rollup-plugin-node-resolve'
import vue from 'rollup-plugin-vue'
import filesize from 'rollup-plugin-filesize'
import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'

// 入口
const input = 'src/index.ts'
// 插件
const plugins = [ 
  json(),
  nodeResolve(),
  commonjs(),
  replace({
    'process.env.NODE_ENV': JSON.stringify('production')
  }),
  vue(),
  typescript({
    objectHashIgnoreUnknownHack: true
  }),
  babel(),
  terser(),
  filesize()
]

// 外链 - 外部依赖的名称，放在该处的npm包不会参与打包
const external = ['vue']

export default [
  {
    input:'src/index.ts',
    // 出口
    output: {
      file: 'dist/index.js',
      format: 'umd', // umd格式为amd, cjs, iife的结合
      name:"file",
      sourcemap: false
    },
    plugins,
    external
  }
]

