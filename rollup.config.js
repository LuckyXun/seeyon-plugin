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
const mode = process.env.NODE_ENV || 'production'
// 插件

const plugins = [ 
  json(),
  nodeResolve(),
  commonjs(),
  replace({
    'process.env.NODE_ENV': JSON.stringify(mode)
  }),
  vue(
    {
      css: true,
      compileTemplate: true
    }
  ),
  typescript({
    objectHashIgnoreUnknownHack: false
  }),
  babel(),
  terser(),
  filesize()
]

// 外链 - 外部依赖的名称，放在该处的npm包不会参与打包
let external = []

if(mode === "production"){
  external = ['vue']
}


export default [
  {
    input:'src/index.ts',
    // 出口
    output: {
      file: 'dist/index.js',
      format: 'es', // umd格式为amd, cjs, iife的结合
      name:"file",
      sourcemap: mode !== "production"
    },
    plugins,
    external
  }
]

