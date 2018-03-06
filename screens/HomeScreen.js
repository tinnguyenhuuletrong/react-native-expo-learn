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
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

const ChatItem = ({id, avatarUrl, name, content, time, onSelect}) => {
  return (
    <TouchableOpacity style={styles.chatItemContainer} onPress={_ => onSelect(id)} >
      <Image source= {{uri: avatarUrl}} style={styles.chatItemIcon}/>
      <View style={styles.chatItemDetail}>
        <View style={styles.chatItemContentGroup} >
          <Text style={styles.chatTitle}>{name}</Text> 
          <Text style={styles.chatShortBrief}>{content}</Text> 
        </View>
        <Text style={styles.chatLastActiveTime}>{time.toLocaleTimeString()}</Text>
      </View>
    </TouchableOpacity>
  )
}

const fakeData = [{
  id: 1,
  key: 1,
  avatarUrl: 'https://graph.facebook.com/1014603979/picture',
  name: 'Hoi Tao Facebook',
  content: 'TinNguyen: hello',
  time: new Date()
},{
  id: 2,
  key: 2,
  avatarUrl: 'https://graph.facebook.com/1014603979/picture',
  name: 'Abc',
  content: 'ThaiNguyen: beep',
  time: new Date()
}]

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'
  };

  selectChatItem(itemId) {
    this.props.navigation.navigate('Conversation', {id: itemId});
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          {
            fakeData.map(itm => <ChatItem {...itm} onSelect={this.selectChatItem.bind(this)}/>)
          }
        </ScrollView>
      </View>
    );
  }

}

const CHAT_ITEM_HEIGHT = 80;
const CHAT_ITEM_ICON_HEIGHT = 70;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 0,
  },
  chatItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height:CHAT_ITEM_HEIGHT,
    margin: 5,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    paddingTop: 2
  },
  chatItemIcon: {
    width: 70,
    height: CHAT_ITEM_ICON_HEIGHT,
    borderRadius: 35,
    marginLeft: 5,
    borderColor: 'black',
    borderWidth: 1,
  },
  chatItemDetail: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height:'100%',
    marginLeft: 5,
  },
  chatItemContentGroup: {
    flexDirection: 'column',
    flex: 1
  },
  chatLastActiveTime: {
    color: 'gray',
    fontSize: 12
  },
  chatTitle: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  chatShortBrief: {
    marginTop:2,
    color: 'gray'
  }
});
