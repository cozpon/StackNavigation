import React, {Component} from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { Container, Left, Right, Header, Body, Title } from "native-base";

class Extra extends Component {
 render() {
    let navigation = this.props.navigation;
    return (
      <Container>
        <Header style={{backgroundColor: '#a9c3d2'}}>
          <Left>
            <Icon
              name='map-o'
              type='font-awesome'
              size={25}
              color={'#FF9F1C'}
              underlayColor={'white'}
              onPress={() => navigation.navigate("DrawerOpen")}
            />
            </Left>

            <Body>
              <Text> Hey Cool! </Text>
            </Body>

            <Right>
              <Text> I understand it! </Text>
            </Right>
        </Header>

        <Text style={styles.textSecond}> You can do anything! </Text>
      </Container>
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

export default Extra;