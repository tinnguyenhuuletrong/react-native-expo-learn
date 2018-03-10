import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import ConversationTopic from '../components/ConversationTopic';

const fakeData = [{
  id: 1,
  key: 1,
  avatarUrl: 'https://graph.facebook.com/1014603979/picture?width=200&height=200',
  name: 'Hoi Tao Facebook',
  content: 'TinNguyen: hello',
  time: new Date()
},{
  id: 2,
  key: 2,
  avatarUrl: 'https://graph.facebook.com/1014603979/picture?width=200&height=200',
  name: 'Abc',
  content: 'ThaiNguyen: beep',
  time: new Date()
}]

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'
  };

  selectChatItem(itemId) {
    this.props.navigation.navigate('Conversation', fakeData.find(itm => itm.id == itemId));
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          {
            fakeData.map(itm => <ConversationTopic {...itm} onSelect={this.selectChatItem.bind(this)}/>)
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 0,
  },
});
