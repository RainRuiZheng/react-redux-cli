/*
 * @Author: your name
 * @Date: 2018-09-24 01:42:34
 * @LastEditTime: 2021-04-12 18:26:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /order-manage/Users/zhengrui/Desktop/hz/react-redux-cli/postcss.config.js
 */
module.exports = {
  plugins: [
    require('precss'),
    require('autoprefixer'),
    "postcss-px-to-viewport": {
      unitToConvert: "px",
      viewportWidth: 375,
      unitPrecision: 6,
      propList: ["*"],
      viewportUnit: "vw",
      fontViewportUnit: "vw",
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: true,
      exclude: [],
      landscape: false
    }
  ]
}