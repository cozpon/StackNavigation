import React from "react";
import { StackNavigator, TabNavigator, DrawerNavigator } from "react-navigation";

import DrawerContent from "../views/Sidebar"

import Profile from '../views/Profile';
import Extra from '../views/Extra';

import SignIn from '../views/SignIn';

import Home from '../views/Home';
import Info from '../views/Info';
import Logout from '../views/Logout';

export const Drawer = DrawerNavigator({
  Home: {
    screen: Home,
  },
  Info: {
    screen: Info,
  },
  Logout: {
    screen: Logout,
  }
}, {
  contentComponent: DrawerContent,
  drawerWidth: 250,
  drawerPosition: 'left',
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
});

export const SignedIn = TabNavigator({
  Home: {
    screen: Drawer,
  },
  Profile: {
    screen: Profile,
  },
  Extra: {
    screen: Extra,
  }
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e58f19',
    activeBackgroundColor: "#a9c3d2",
    inactiveTintColor: '#666',
    labelStyle: {
      fontSize: 22,
      padding: 12
    }
  }
});

export const SignedOut = StackNavigator({
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: "Sign Up"
    }
  },
});

export const RootNavigator = (signedIn = false) => {
  return StackNavigator(
    {
      SignedIn: {
        screen: SignedIn,
        navigationOptions: {
          gesturesEnabled: false
        }
      },
      SignedOut: {
        screen: SignedOut,
        navigationOptions: {
          gesturesEnabled: false
        }
      }
    }, {
      headerMode: "none",
      mode: "modal",
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  );
};