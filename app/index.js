import React, { Component } from 'react';
import { View } from 'react-native';
import { Tab, Drawer } from "./config/navigation";

export default class App extends Component {
  render() {
      return(
      <View>
        <Drawer />
        <Tab />
      </View>
        );
  }
}