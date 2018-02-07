import React, {Component} from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { Container, Left, Right, Header, Body, Title } from "native-base";

class Profile extends Component {
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
              <Text> So thorough </Text>
            </Body>

            <Right>
              <Text> much explanation </Text>
            </Right>
        </Header>

        <Text style={styles.textFirst}>
          Welcome to your Profile
        </Text>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  textFirst: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 300,
  },
});

export default Profile;