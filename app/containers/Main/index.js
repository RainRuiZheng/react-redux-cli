/*
 * @Author: your name
 * @Date: 2021-04-22 16:58:30
 * @LastEditTime: 2021-04-22 20:00:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-redux-cli/app/containers/Main/index.js
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { OstLoading } from 'ost-ui';
import './style.less';
import okImg from '@/image/ok.png'
import avatarImg from '@/image/avatar.jpeg';
import pkg from '../../../package.json';
import Version from './components/Version';
import { Connect } from './connect';


class Main extends Component {

  constructor(props, context) {
    super(props, context);
    const { actions } = this.props;
    actions.initMainPage();
    document.title = 'react-redux';
  }

  render() {
    const { isFetching } = this.props;
    const {webpack} = pkg.devDependencies;
    const {react, redux} = pkg.dependencies;

    return ([
      <OstLoading key='0' isLoading={isFetching} />,
      isFetching
        ? null
        : <div className="Main" key='1'>
          <img src={avatarImg} alt=""/>
          <img src={okImg} alt=""/>
          <h2>SPINACIA-REACT</h2>
          <span>react with redux</span>
          <Version
            list={[
              {webpack},
              {react},
              {redux},
              {'react-router': pkg.dependencies['react-router']},
            ]} />
        </div>
    ])}
}

Main.propTypes = {
  actions: PropTypes.object,
  isFetching: PropTypes.bool
}

export default Connect(Main);
