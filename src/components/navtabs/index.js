import React from 'react';
import styled from 'styled-components/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import HomeStack from '../../app/pages/pages-app/home-stack';

const Nav = createBottomTabNavigator();


//Navigation through bottom tabs
const NavTabs = () => {
    return (
        <Nav.Navigator
            tabBarOptions={{
            activeTintColor: '#613EEA',
            inactiveTintColor: '#C2B2FF',
            showLabel: false,
            tabStyle: {
                justifyContent: 'center'
            }
            }}

            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === "Home") {
                        iconName = focused
                        ? 'home'
                        : 'home-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color}></Ionicons>

                }
            })}
          >
            <Nav.Screen name="Home" component={HomeStack} />
        </Nav.Navigator>
    )
};


export default NavTabs;