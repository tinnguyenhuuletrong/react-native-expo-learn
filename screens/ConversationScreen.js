import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { HeaderBackButton } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import CircleAvatar from '../components/CircleAvatar';
import MineChatMessage from '../components/MineChatMessage';
import OtherChatMessage from '../components/OtherChatMessage';


const MyMessage = MineChatMessage;
const OtherMessage = OtherChatMessage

export default class ConversationScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    const name = params ? params.name : null;

    return {
      title: name,
      headerLeft: <HeaderBackButton title='Back' onPress={() => navigation.goBack(null)} />,
      tabBarVisible: false
    }
  };

  render() {
    const { params } = this.props.navigation.state;
    const id = params ? params.id : null;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <MyMessage {...fakeMyMessage} />
          <OtherMessage {...fakeOtherMessage}/>
          <OtherMessage {...{...fakeOtherMessage, hasAvatar: true}}/>
        </ScrollView>
      </View>
    );
  }
}

const fakeMyMessage = {
  content: 'This is my message',
  status: 'read'
}
const fakeOtherMessage = {
  content: 'This is other message',
  sender: {
    avatarUrl: 'https://graph.facebook.com/100001248687904/picture?width=200&height=200'
  },
  hasAvatar: false
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
