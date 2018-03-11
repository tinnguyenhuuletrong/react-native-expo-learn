import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList
} from 'react-native';

import ConversationTopic from '../components/ConversationTopic';

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
        <FlatList 
          style={styles.container}
          data={fakeData}
          renderItem={({item, separators}) => (
            <ConversationTopic {...item} onSelect={this.selectChatItem.bind(this)} />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});

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