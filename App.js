import React from 'react';
import {createSwitchNavigator, createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import SignUpScreen from './src/screens/SignUpScreen'
import LoginScreen from './src/screens/LoginScreen'
import SplashScreen from './src/screens/SplashScreen'

//// ADMINISTRATOR SCREENS 

import Home from './src/screens/Home'
import IncDecBeds from './src/screens/IncDecBeds'
import CheckWard from './src/screens/CheckWard'
import DividerWard from './src/screens/DividerWard'
import FindNearestHospital from './src/screens/FindNearestHospital'
import AllWards from './src/screens/AllWards'
import Approvals from './src/screens/Approvals'

//// ONLY STAFF SCREENS

import HomeStaff from './src/screens/HomeStaff'
import IncDecBedsStaff from './src/screens/IncDecBedsStaff'
import CheckWardStaff from './src/screens/CheckWardStaff'
import DividerWardStaff from './src/screens/DividerWardStaff'
import AllWardsStaff from './src/screens/AllWardsStaff'



import {decode, encode} from 'base-64'
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }


export default class App extends React.Component {
  
  render() {
    return (
          <AppContainer/> 
    );
  }
}

const Login = createSwitchNavigator(
  {
    LoginScreen: LoginScreen,
    SignUpScreen: SignUpScreen
  },
  {
    initialRouteName: 'LoginScreen',
  }

);

//ADMINISTRATOR FLOW

const WardStack = createMaterialTopTabNavigator({
  current: {
    screen: IncDecBeds,
    navigationOptions: { title: 'Current Ward', }
    
  },

  all : {
    screen : AllWards,
    navigationOptions: { title: 'All Wards', }
  },
  Approvals : {
    screen: Approvals,
    navigationOptions: { title: 'PERMISSIONS'}
  }

},
{
  initialRouteName: 'current',
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: '#fbe9e7',
    inactiveColor: '#9e9e9e',
    style: { backgroundColor: 'black', },
    labelStyle: { fontSize: 16, textAlign: 'center'},
    tabStyle: {  justifyContent: 'center', alignItems: 'center', alignContent: 'center' , height: 50, paddingBottom:10},
    iconStyle: { inactiveColor: 'grey' }
    , indicatorStyle: { height: 4, backgroundColor: '#ffab91' }
    //pressColor:'blue'


  },

})


const HomeStack = createStackNavigator({
  CheckWard: CheckWard,
  DividerWard: DividerWard,
  
},
{
  initialRouteName: 'CheckWard',
  headerMode: 'none'
})



const IncDecStack = createStackNavigator({
  IncDecBedss: {screen : WardStack},
  NearestHosp: FindNearestHospital
},
{
  initialRouteName: 'IncDecBedss',
  headerMode: 'none'
})

// STAFF FLOW

const WardStaffStack = createMaterialTopTabNavigator({
  currentStaff: {
    screen: IncDecBedsStaff,
    navigationOptions: { title: 'Current Ward', }
    
  },

  allStaff : {
    screen : AllWardsStaff,
    navigationOptions: { title: 'All Wards', }
  },

},
{
  initialRouteName: 'currentStaff',
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: '#fbe9e7',
    inactiveColor: '#9e9e9e',
    style: { backgroundColor: 'black', },
    labelStyle: { fontSize: 16, textAlign: 'center'},
    tabStyle: {  justifyContent: 'center', alignItems: 'center', alignContent: 'center' , height: 50, paddingBottom:10},
    iconStyle: { inactiveColor: 'grey' }
    , indicatorStyle: { height: 4, backgroundColor: '#ffab91' }
    //pressColor:'blue'


  },

})

const HomeStaffStack = createStackNavigator({
  CheckWardStaff: CheckWardStaff,
  DividerWardStaff: DividerWardStaff,
  
},
{
  initialRouteName: 'CheckWardStaff',
  headerMode: 'none'
})




const Base = createSwitchNavigator(
{
    Login : Login,
    Home : HomeStack,
    IncDecBedsss: {screen : IncDecStack},
    HomeIt: Home,

    // STAFF ONLY

    HomeStaffStack: HomeStaffStack,
    IncDecStaff: {screen: WardStaffStack},
    HomeStaffIt: HomeStaff
    
},
{
  initialRouteName : 'HomeStaffStack'
},{headerMode:'none'})

const SplashNav = createSwitchNavigator(
  {
    SplashScreen:SplashScreen,
    Signoutnav:Login
  },
  {
    initialRouteName:'SplashScreen'
  }
)

const Main  = createSwitchNavigator(
  {
       SplashNav : SplashNav,
       Base : Base

  },
  {headerMode:'none'}
) 

const AppContainer = createAppContainer(Main)










