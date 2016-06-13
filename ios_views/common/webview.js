var React = require('react');
var ReactNative = require('react-native');
var Util = require('./util');
var Header = require('./header');

var {
  WebView,
  View
} = ReactNative;

module.exports = {
  render: function() {
    return (
      <View>
        <Header
          navigator={this.props.navigator}
          initObj={{
            backName: this.props.backName,
            title: this.props.title
          }}
        />
        <WebView
          contentInset={{top: -40}}
          startInLoadingState={true}
          style={{width:Util.size.width, height:Util.size.height - 50}}
          url={this.props.url}>
        </WebView>
      </View>
    );
  }
};
