import React, { Component } from "react";
import { ScrollView, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
  let navigation = this.props.navigation;
    return (
        <ScrollView>
          <Text style={styles.text}> Home </Text>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 300,
  },
});

export default Home;