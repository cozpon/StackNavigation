import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './Sidebar.style';
import PropTypes from 'prop-types';

class DrawerContent extends Component {

  navigateToScreen = (route) => () => {
    const navigate = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigate);
  }

  render () {
    return (
      <View style={styles.container}>
        <ScrollView>

          <Text style={styles.separatorTop}>
          </Text>

          <Button
            raised
            icon={{name: 'trash-o', type: 'font-awesome', size: 20}}
            title='Home'
            buttonStyle={styles.button}
            onPress={this.navigateToScreen('Home')}/>

          <Text style={styles.sectionHeadingStyle}>
          </Text>

          <Button
            raised
            icon={{name: 'umbrella', type: 'font-awesome', size: 20}}
            title='Info'
            buttonStyle={styles.button}
            onPress={this.navigateToScreen('Info')}/>

          <Text style={styles.sectionHeadingStyle}>
          </Text>

          <Button
            raised
            icon={{name: 'user-circle', type: 'font-awesome', size: 20}}
            title='Logout'
            buttonStyle={styles.button}
            onPress={this.navigateToScreen('Logout')}/>

        </ScrollView>
      </View>
    );
  }
}

DrawerContent.propTypes = {
  navigation: PropTypes.object
};

export default DrawerContent;