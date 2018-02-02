import React, { Component } from "react";
import { ScrollView, Text, StyleSheet } from 'react-native';

class Five extends Component {
 render() {
    return (
        <ScrollView>
          <Text style={styles.text}>
            SO MANY PAGES
          </Text>
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

export default Five;