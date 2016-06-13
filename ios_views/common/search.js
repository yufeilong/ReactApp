var React = require('react');
var Util = require('./util');
var {
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  TextInput
} = require('react-native');

module.exports = React.createClass({
  render: function() {
    return (
      <View>
        <TextInput style={[styles.flex_1, styles.input]} {...this.props}/>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  flex_1: {
    flex: 1
  },
  input: {
    borderWidth: Util.pixel,
    height: 40,
    borderColor: '#dddddd',
    paddingLeft: 5
  }
});
