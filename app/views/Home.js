import React, { Component } from "react";
import { ScrollView, Text, StyleSheet } from 'react-native';

class Home extends Component {
 render() {
    return (
        <ScrollView>
          <Text style={styles.text}> Welcome </Text>
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