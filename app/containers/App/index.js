
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AppActions from './action';
import './style.less';


class App extends Component {

  componentDidMount() {
    document.body.style.margin = '0px';
    const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
    /** ** 始 － 该段代码用于，监听安卓键盘弹起，防止键盘挡住界面内容 *** */
    if (/Android/i.test(navigator.userAgent)) {
      window.addEventListener('resize', () => {
        const nowClientHeight = document.documentElement.clientHeight || document.body.clientHeight;

        if (clientHeight > nowClientHeight) {
          document.body.style.height = `${clientHeight}px`;
        } else if (clientHeight === nowClientHeight) {
          document.body.style.height = null;
        }
      });
    } else if (/ios/i.test(navigator.userAgent)) {

      document.body.addEventListener('focusout', () => {
        // 软键盘收起的事件处理
        setTimeout(() => {
          // 当焦点在弹出层的输入框之间切换时先不归位
          window.scroll(0, 0); // 失焦后强制让页面归位
        }, 300);
      });
    }
    /** ** 终 － 该段代码用于，监听安卓键盘弹起，防止键盘挡住界面内容 *** */
  }

  render() {
    return (
      <div style={{ height: '100%', width: '100%' }}>
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapActionToProps(dispatch) {
  return {
    appAction: bindActionCreators(AppActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapActionToProps
)(App);
