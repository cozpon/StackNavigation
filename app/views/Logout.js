import React, { Component } from 'react';
import { ScrollView, Button } from 'react-native';
import { onSignOut } from '../auth';

class Logout extends Component {

  _handleSubmit = () => {
    let navigation = this.props.navigation;
      onSignOut().then(() => navigation.navigate("SignedOut"));
  }

  render() {
    let navigation = this.props.navigation;
    return(
      <ScrollView style={{marginTop: 200}}>
    <Button
        onPress={() => navigation.navigate('DrawerOpen')}
        title="Open Sidebar"
      />
     <Button
        backgroundColor="#03A9F4"
        title="SIGN OUT"
        onPress={this._handleSubmit}
      />
    </ScrollView>

    );
  }
}

export default Logout;