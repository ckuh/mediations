import React, { Component } from 'react'
import { AppRegistry, StyleSheet } from 'react-native'
import Mediations from './src/js/components/Mediations'
import { Provider } from 'react-redux'
import store from './src/js/Store'

const Main = () => (
  <Provider store={store}>
    <Mediations />
  </Provider>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

AppRegistry.registerComponent('mediations', () => Main)
