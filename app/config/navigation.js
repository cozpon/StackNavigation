import React from "react";
import { TabNavigator, DrawerNavigator } from "react-navigation";

import DrawerContent from "../views/Sidebar"

import Profile from '../views/Profile';
import Extra from '../views/Extra';

import Home from '../views/Home';
import Info from '../views/Info';
import Last from '../views/Last_One';

export const Drawer = DrawerNavigator({
  Home: {
    screen: Home,
  },
  Info: {
    screen: Info,
  },
  Last: {
    screen: Last,
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