/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView
} from 'react-native';

export default class firstReactNativeApp extends Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      outputArray: [],
      outputText: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    return (
      <View style={styles.outerContainer}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.text}>Enter Number:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.setState({userInput: text})}
            value={this.state.userInput} />
          <Button
            onPress={this.handleSubmit}
            title="Submit"
            style={styles.submitButton}>Submit</Button>
          <Text style={styles.text}>{this.state.outputText}</Text>
        </ScrollView>
      </View>
    );
  }

  handleSubmit() {
    var num = parseInt(this.state.userInput);
    var arr = [];
    for (var i = 1; i <= num; i++) {
      arr.push(i);
    }
    arr = arr.map(number => {
      if (number % 15 === 0) {
        return 'ping-pong';
      } else if (number % 5 === 0) {
        return 'pong';
      } else if (number % 3 === 0) {
        return 'ping';
      } else {
        return number;
      }
    });
    var toDisplay = arr.join(',');
    this.setState({outputText: toDisplay});
  }
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#551a81',
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  },
  textInput: {
    height: 40,
    width: 200,
    backgroundColor: 'white',
    color: '#551a81',
    marginTop: 25,
    textAlign: 'center'
  },
  submitButton: {
    width: 200,
  }
});

AppRegistry.registerComponent('firstReactNativeApp', () => firstReactNativeApp);
