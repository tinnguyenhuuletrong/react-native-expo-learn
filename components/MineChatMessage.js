import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default ({ content, status = 'read' }) => (
    <View style={styles.myMessageContainer}>
        <TouchableOpacity style={styles.messageContent}>
            <Text style={styles.messageContentText}>{content}</Text>
        </TouchableOpacity>
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
    messageContent: {
        backgroundColor: '#0084ff',
        borderRadius: 15,
        padding: 8,
        margin: 5
    },
    myMessageStatus: {
        alignSelf: 'flex-end',
    },
    messageContentText: {
        color: 'white',
        fontSize: 14
    },
});
