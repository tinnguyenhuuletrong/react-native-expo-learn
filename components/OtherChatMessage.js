import React from 'react';
import { View, StyleSheet } from 'react-native';
import CircleAvatar from './CircleAvatar';
import MultimediaContent from './MultimediaContent';

export default ({ sender, content, hasAvatar = false }) => (
    <View style={styles.otherMessageContainer}>
        {(hasAvatar && sender.avatarUrl) ?
            <CircleAvatar source={{ uri: sender.avatarUrl }} style={styles.otherMessageAvatar} />
            :
            <View style={styles.otherMessageAvatar} />
        }
        <MultimediaContent content={content} color='black' backgroundColor='#f1f0f0'/>
    </View >
)

const styles = StyleSheet.create({
    myMessageStatus: {
      alignSelf: 'flex-end',
    },
    messageContentText: {
      color: 'black',
      fontSize: 14
    },
    otherMessageContainer: {
      flexDirection: 'row'
    },
    otherMessageAvatar: {
      width: 40,
      height: 40,
      alignSelf: 'flex-end',
    }
  });
  