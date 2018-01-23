import React, {Component} from "react";
import { ScrollView, Text } from 'react-native';

class Home extends Component {
 render() {
    return (
        <ScrollView>
          <Text style={{fontSize: 40, fontWeight: 'bold'}}> Welcome 2 Hell </Text>
        </ScrollView>
    );
  }
}

export default Home;