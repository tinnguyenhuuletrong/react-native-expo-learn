import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    
  };

  render() {
    const { params } = this.props.navigation.state;
    const id = params ? params.id : null;
    return (
      <View style={styles.container}>
        <Text>{`Conversation: ${id}`}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
