import React, {Component} from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

class Second extends Component {
 render() {
    return (
      <ScrollView>
        <Text style={styles.textSecond}> SECOND PAGE </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  textSecond: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 300,
  },
});

export default Second;