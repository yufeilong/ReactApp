'use strict';

var React = require('react');
var ReactNative = require('react-native');
var Search = require('./../common/search');
var Util = require('./../common/util');
var ServiceURL = require('./../common/service');
var BookItem = require('./book_item');
var BookDetail = require('./book_detail');

var {
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  ScrollView,
  ActivityIndicatorIOS,
  TouchableOpacity
} = ReactNative;

module.exports = React.createClass({
});

var styles = StyleSheet.create({
  flex_1:{
    flex:1,
    marginTop: 5
  },
  search: {
    paddingLeft: 5,
    paddingRight: 5,
    height: 45
  },
  btn: {
    width: 50,
    backgroundColor: '#0091ff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  fontFFF: {
    color: '#fff'
  },
  row: {
    flexDirection: 'row'
  }
});

module.exports = BookList;
