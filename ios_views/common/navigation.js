/**
 *
 * 封装Navigator
 * 所有场景的切换动画都是从底部往上，回退是从上往下
 */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

module.exports = React.createClass({
  render() {
    return(<Navigator
      initialRoute={{name: '', component: this.props.component, index: 0}}
      configureScene={() => {return Navigator.SceneConfigs.FloatFromBottom}}
      renderScene={(route, navigator) => {
        const Component = route.component;
        return (
          <View style={{flex: 1}}>
            <Component navigator={navigator} route={route} {...route.passProps}/>
          </View>
        )
      }}
      />
    );
  }
});
