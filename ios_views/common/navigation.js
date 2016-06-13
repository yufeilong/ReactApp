/**
 *
 * 封装Navigator
 * 所有场景的切换动画都是从底部往上，回退是从上往下
 */
var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  Navigator
} = ReactNative;

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
