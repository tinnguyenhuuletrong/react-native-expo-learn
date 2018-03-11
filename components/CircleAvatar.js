import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default CircleAvatar = ({ source, style = {}, ...others }) => {
    const mergedStyles = StyleSheet.flatten([styles.chatItemIcon, style]);
    mergedStyles.borderRadius = Math.max(mergedStyles.width, mergedStyles.height) / 2;

    return <Image source={{ ...source, cache: 'force-cache' }} style={mergedStyles} {...others} />
}

const styles = StyleSheet.create({
    chatItemIcon: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginLeft: 5,
        borderColor: 'black',
        borderWidth: 1,
    }
})