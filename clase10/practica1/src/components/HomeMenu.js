import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Profile from '../screens/Profile';
import Home from '../screens/home';
import NavegacionTab from "./NavegacionTab";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome} from "@expo/vector-icons"

const Tab=createBottomTabNavigator();

class HomeMenu extends component {
    constructor(props){
        super(props)
    }
    render(){
        

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Profile" component={Profile} options={
            {tabBarIcon: ()=> <FontAwesome6 name="person-rifle" size={24} color="black" />, headerShown:false }}/>
        <Tab.Screen name="Home" component={Home} options={
            {tabBarIcon: ()=> <Entypo name="home" size={24} color="black" />, headerShown:false} }/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}}

export default HomeMenu

