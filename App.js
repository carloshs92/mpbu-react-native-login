import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from "./src/containers/Main/Main";
import LinearGradient from 'react-native-linear-gradient';

export default class App extends React.Component {
  render() {
    return (
        <LinearGradient colors={['#e85555', '#ffa886']}
                        style={styles.container}
                        start={{x: 0.0, y: 0.0}}
                        end={{x: 0.5, y: 0.9}}>

            <Main />
        </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
