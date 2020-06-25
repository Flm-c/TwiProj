import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { MainPage } from './MainPage/MainPage';
import { Profile } from './ProfilePage/Profile';
import { MessagePage } from './MessagePage/MessagePage';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout />
    );
  }
}
