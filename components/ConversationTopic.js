import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform
} from 'react-native';

export default ConversationTopic = ({ id, avatarUrl, name, content, time, onSelect }) => {
    return (
        <TouchableOpacity style={styles.chatItemContainer} onPress={_ => onSelect(id)} >
            <Image source={{ uri: avatarUrl }} style={styles.chatItemIcon} />
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

const CHAT_ITEM_HEIGHT = 80;
const CHAT_ITEM_ICON_HEIGHT = 70;
const styles = StyleSheet.create({
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
