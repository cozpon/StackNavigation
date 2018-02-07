import React from "react";
import { TabNavigator, DrawerNavigator } from "react-navigation";

import DrawerContent from "../views/Sidebar"

import First from '../views/First';
import Second from '../views/Second';

import Home from '../views/Home';
import Four from '../views/Four';
import Five from '../views/Five';

export const Drawer = DrawerNavigator({
  Home: {
    screen: Home,
  },
  Four: {
    screen: Four,
  },
  Five: {
    screen: Five,
  }
}, {
  contentComponent: DrawerContent,
  drawerWidth: 250,
  drawerPosition: 'left',
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
});

export const Tab = TabNavigator({
  Home: {
    screen: Drawer,
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
      fontSize: 22,
      padding: 12
    }
  }
});