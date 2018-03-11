import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

function switchContentType(mContent, color, backgroundColor) {
    if (typeof (mContent) == 'string')
        mContent = { type: 'text', value: mContent }

    const type = mContent.type
    switch (type) {
        case 'text':
            return (
                <TouchableOpacity style={[styles.messageTextContainer, {backgroundColor: backgroundColor}]}>
                    <Text style={[styles.messageContentText, { color }]} >{mContent.value}</Text>
                </TouchableOpacity>
            )
        case 'image':
            return (<Image source={{ uri: mContent.uri }} style={styles.messageContentImage} />)
        case 'like':
            return (<SimpleLineIcons name="like" style={styles.messageIcon} size={mContent.size || 20} />)
    }
}

export default MultimediaContent = ({ content, color, backgroundColor }) => {
    return switchContentType(content, color, backgroundColor);
}

const styles = StyleSheet.create({
    messageTextContainer: { 
        borderRadius: 15,
        padding: 8,
        margin: 5
    },
    messageContentText: {
        fontSize: 14
    },
    messageContentImage: {
        width: 200,
        height: 200,
        borderRadius: 15,
        padding: 8,
        margin: 5
    },
    messageIcon: {
        margin: 5,
        padding: 8
    }
})