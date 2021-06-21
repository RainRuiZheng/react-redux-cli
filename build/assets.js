/*
 * @Author: your name
 * @Date: 2019-04-21 05:46:54
 * @LastEditTime: 2021-05-10 16:23:48
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /react-redux-cli/build/assets.js
 */

module.exports = {
  dev: {
    cdn: {
      css: [],
      js: [
        'https://cdn.bootcss.com/vConsole/3.2.0/vconsole.min.js',
      ]
    },
    loading: {
      html: './loading/loading.html',
      css: './loading/loading.css'
    }
  },
  prod: {
    cdn: {
      css: [],
      js: [
        'https://unpkg.com/react@16.5.2/umd/react.production.min.js',
        'https://unpkg.com/react-dom@16.5.2/umd/react-dom.production.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/redux/3.6.0/redux.min.js',
        'https://cdn.bootcss.com/react-redux/5.0.7/react-redux.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/redux-thunk/2.1.0/redux-thunk.min.js',
        'https://cdn.bootcss.com/react-router/3.2.1/ReactRouter.min.js',
      ]
    },
    loading: {
      html: './loading/loading.html',
      css: './loading/loading.css'
    }
  }
}