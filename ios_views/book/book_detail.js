import React from 'react';
import Util from './../common/util';
import ServiceURL from './../common/service';
import BookItem from './../common/book_item';
import Header from './../common/header';

import {
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';

module.exports = React.createClass({
  getInitialState: function() {
    return {
      data: null
    };
  },
  render: function() {
    return (
      <ScrollView>
        {
          this.state.data?
          <View>
            <Header
              navigator={this.props.navigator}
              initObj={{
                backName: '图书'，
                title: this.state.data.title
              }}/>
            <BookItem row={this.state.data}/>
            <View>
              <Text style={[styles.title]}>图书简介</Text>
              <Text style={styles.text}>{this.state.data.summary}</Text>
            </View>
            <View>
              <Text style={[styles.title]}>作者简介</Text>
              <Text style={styles.text}>{this.state.data.author_intro}</Text>
            </View>
            <View></View>
          </View>
          : Util.loading
        }
      </ScrollView>
    );
  },
  componentDidMount: function() {
    let id = this.props.id;
    let that = this;
    let url = ServiceURL.book_search_id + '/' + id;
    Util.get(url, function(data) {
      that.setState({
        data: data
      });
    }, function(err) {
      alert(err);
    });
  }
});

const styles = StyleSheet.create({
  m10: {
    flex: 1
  },
  title: {
    fontSize: 16,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10
  },
  text: {
    marginLeft: 10,
    marginRight: 10,
    color: '#000d22'
  }
});
