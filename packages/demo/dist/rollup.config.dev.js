"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _rollupPluginTypescript = _interopRequireDefault(require("rollup-plugin-typescript2"));

var _rollupPluginCommonjs = _interopRequireDefault(require("rollup-plugin-commonjs"));

var _rollupPluginJson = _interopRequireDefault(require("rollup-plugin-json"));

var _rollupPluginTerser = require("rollup-plugin-terser");

var _rollupPluginNodeResolve = _interopRequireDefault(require("rollup-plugin-node-resolve"));

var _rollupPluginVue = _interopRequireDefault(require("rollup-plugin-vue"));

var _rollupPluginFilesize = _interopRequireDefault(require("rollup-plugin-filesize"));

var _rollupPluginBabel = _interopRequireDefault(require("rollup-plugin-babel"));

var _rollupPluginReplace = _interopRequireDefault(require("rollup-plugin-replace"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
 * @Author: XunL
 * @Description: 
 */
// 入口
var input = 'src/index.ts'; // 插件

var plugins = [(0, _rollupPluginJson["default"])(), (0, _rollupPluginNodeResolve["default"])(), (0, _rollupPluginCommonjs["default"])(), (0, _rollupPluginReplace["default"])({
  'process.env.NODE_ENV': JSON.stringify('production')
}), (0, _rollupPluginVue["default"])(), (0, _rollupPluginTypescript["default"])({
  objectHashIgnoreUnknownHack: true
}), (0, _rollupPluginBabel["default"])(), (0, _rollupPluginTerser.terser)(), (0, _rollupPluginFilesize["default"])()]; // 外链 - 外部依赖的名称，放在该处的npm包不会参与打包

var external = ['vue'];
var _default = [{
  input: 'src/index.ts',
  // 出口
  output: {
    file: 'dist/index.js',
    format: 'umd',
    // umd格式为amd, cjs, iife的结合
    name: "file",
    sourcemap: false
  },
  plugins: plugins,
  external: external
}];
exports["default"] = _default;