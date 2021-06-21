/*
 * @Author: your name
 * @Date: 2019-04-21 05:46:54
 * @LastEditTime: 2021-06-21 14:38:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-redux-cli/build/index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from '../app/index'

ReactDOM.render(
  <MyComponent />,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept('../app/index', () => {
    window.location.reload();
    // ReactDOM.render(
    //   <MyComponent />,
    //   document.getElementById('app')
    // )
  });
}
