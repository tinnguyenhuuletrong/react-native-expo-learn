import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { HeaderBackButton } from 'react-navigation';

const Left = ({ onPress }) => (
  <TouchableHighlight onPress={onPress}>
    <Text>Back</Text>
  </TouchableHighlight>
);

export default class ConversationScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    const name = params ? params.name : null;

    return {
      title: name,
      headerLeft: <HeaderBackButton title='Back' onPress={() => navigation.goBack(null)} />,
    }
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
