import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import CircleAvatar from './CircleAvatar';

export default ({ sender, content, hasAvatar = false }) => (
    <View style={styles.otherMessageContainer}>
        {(hasAvatar && sender.avatarUrl) ?
            <CircleAvatar source={{ uri: sender.avatarUrl }} style={styles.otherMessageAvatar} />
            :
            <View style={styles.otherMessageAvatar} />
        }
        <TouchableOpacity style={styles.messageContent}>
            <Text style={styles.messageContentText} >{content}</Text>
        </TouchableOpacity>
    </View >
)

const styles = StyleSheet.create({
    messageContent: {
      backgroundColor: '#f1f0f0',
      borderRadius: 15,
      padding: 8,
      margin: 5
    },
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
  