import React from "react";
import { StackNavigator, TabNavigator, DrawerNavigator, DrawerItems } from "react-navigation";

import Home from '../views/Home';
import First from '../views/First';
import Second from '../views/Second';

// export const Drawer = DrawerNavigator({
//   Home: {
//     screen: Home,
//   },
//   First: {
//    screen: First,
//   },
//   Second: {
//    screen: Second,
//   }
// }, {
//   contentComponent: DrawerContent,
//   drawerWidth: 250
// });

export const Tab = TabNavigator({
  Home: {
    screen: Home,
  },
  First: {
    screen: First,
  },
  Second: {
    screen: Second,
  }
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: '#f2f2f2',
    activeBackgroundColor: "#2EC4B6",
    inactiveTintColor: '#666',
    labelStyle: {
      fontSize: 12,
      padding: 12
    }
  }
});