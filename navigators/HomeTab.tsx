import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import CustomTabBar from '../components/CustomTabBar';
import { View } from 'react-native';
import Home from '../screens/home/Home';
import Ranking from '../screens/home/ranking/Ranking';
import UserHeader from '../screens/user/UserHeader';

const TabNavigator = createBottomTabNavigator();

const HomeTab = () => {

    return (
        <TabNavigator.Navigator screenOptions={{
            headerStyle: {
                height: 120,
                backgroundColor: '#9438F5',
            },
            headerTitleStyle: {
                color: '#fff',
            },
            
        }} initialRouteName='Home' tabBar={(props) => <CustomTabBar {...props}/>}>
            <TabNavigator.Screen name="Home" component={Home}/>
            <TabNavigator.Screen name="Cart" component={Ranking}/>
            <TabNavigator.Screen name="Workout" component={Ranking}/>
            <TabNavigator.Screen name="Ranking" component={Ranking}/>
            <TabNavigator.Screen name="User" component={UserHeader}/>
 
        </TabNavigator.Navigator>
    );
}

export default HomeTab;