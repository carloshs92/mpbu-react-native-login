import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from "./containers/Main/Main";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Main/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dd1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
