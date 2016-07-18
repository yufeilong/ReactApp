/**
 *
 * Util模块工具类
 * 主要提供工具方法
 *
 */
var React = require('react');
var ReactNative = require('react-native');
var Dimensions = require('Dimensions');

var {
  PixelRatio,
  ActivityIndicator
} = ReactNative;

module.exports = {
  /* 最小线宽 */
  pixel: 1 / PixelRatio.get(),
  /* 屏幕尺寸 */
  size: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  /**
   * 基于fetch的get方法
   * @method get
   * @param  {string} url               访问的url
   * @param  {function} successCallback 成功回调
   * @param  {function} failCallback    失败回调
   */
  get: function(url, successCallback, failCallback) {
    fetch(url)
      .then((respons) => respons.text())
        .then(responsText => {
          successCallback(JSON.parse(responsText));
        })
        .catch(function(err) {
          failCallback(err);
        });
  },
  /* loading效果 */
  loading: <ActivityIndicator color="#3E00FF"
            style = {{marginTop: 40, marginLeft: Dimensions.get('window').width/2-10}}/>
};
