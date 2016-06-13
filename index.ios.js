/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import Navigation from './ios_views/common/navigation';
import Book from './ios_views/book/book_list';
import Music from './ios_views/music/music';
import Movie from './ios_views/movie/movie';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  ScrollView,
  StatusBarIOS
} from 'react-native';

StatusBarIOS.setHidden(true);

class ReactApp extends Component {

  constructor(props) {
    super(props);
    this.state = {selectedTab: '图书'};
  }

  getInitialState(){
    return {
      selectedTab: '图书'
    };
  }

  render() {
    return (
      <TabBarIOS tintColor="white" barTintColor="darkslateblue">
        <TabBarIOS.Item
          title='图书'
          selected={this.state.selectedTab === '图书'}
          icon={require('image!book')}
          onPress={() => {
            this.setState({
              selectedTab: '图书'
            });
          }}>
          <Navigation component = {Book} />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title='电影'
          selected={this.state.selectedTab === '电影'}
          icon={require('image!movie')}
          onPress={() => {
            this.setState({
              selectedTab: '电影'
            });
          }}>
          <Navigation component = {Book} />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title='音乐'
          selected={this.state.selectedTab === '音乐'}
          icon={require('image!music')}
          onPress={() => {
            this.setState({
              selectedTab: '音乐'
            });
          }}>
          <Navigation component = {Book} />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
};

AppRegistry.registerComponent('ReactApp', () => ReactApp);
