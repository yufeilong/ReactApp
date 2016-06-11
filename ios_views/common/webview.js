import React from 'react';
import Util from './util';
import Header from './header';

import {
  WebView,
  View
} from 'react-native';

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
