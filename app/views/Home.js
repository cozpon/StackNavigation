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
          <Text style={styles.text}> Welcome Home </Text>
          <Icon
              name='map-o'
              type='font-awesome'
              size={50}
              color={'#FF9F1C'}
              underlayColor={'white'}
              onPress={() => navigation.navigate("DrawerOpen")}
            />
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