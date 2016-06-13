import React from 'react';
import Util from './util';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

module.exports = React.createClass({
  render: function() {
    return (
      <View>
        <View style={style.go}>
        </View>
      </View>
    )
  }
});

const styles = StyleSheet.create({
  go: {
    borderLeftWidth: 4 * Util.pixel,
    borderBottomWidth: 4 * Util.pixel,
    width: 15,
    height: 15,
    transform: [{routate: '45deg'}],
    borderColor: '#FFF',
    marginLeft: 10
  }
});
