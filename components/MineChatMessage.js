import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MultimediaContent from './MultimediaContent';

export default ({ content, status = 'read' }) => (
    <View style={styles.myMessageContainer}>
        <MultimediaContent content={content} color='white' backgroundColor='#0084ff' />
        <Ionicons name="md-checkmark-circle" style={styles.myMessageStatus} color={MESSAGE_STATUS_COLOR_MAP[status]} />
    </View >
)
const MESSAGE_STATUS_COLOR_MAP = {
    'read': '#0084ff',
    'sent': 'white',
    'received': 'white'
}
const styles = StyleSheet.create({
    myMessageContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    myMessageStatus: {
        alignSelf: 'flex-end',
    },
    messageContentText: {
        color: 'white',
        fontSize: 14
    },
});
