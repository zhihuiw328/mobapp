import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


import HomeStack from './HomeStack';
import SafetyTimerStack from './SafetyTimerStack';
import SettingStack from './SettingStack';

const Tab = createBottomTabNavigator();

export default function Drawer() {
    return (
        <NavigationContainer>
            <Tab.Navigator 
                screenOptions = {({route}) => ({
                        headerShown: false, 
                        tabBarIcon: ({ focused, color, size }) => {
                            const icons = {
                                'Home': focused ? 'home-outline' : 'home',
                                'Safety Timer': focused ? 'timer' : 'timer-outline',
                                'Settings': focused ? 'settings' : 'settings-outline',
                            };
                
                            const iconName = icons[route.name];
                            
                            return <Ionicons name={iconName} size={size} color={color} />;
                        },
                        tabBarActiveTintColor: '#3684C9',
                        tabBarInactiveTintColor: 'gray',
                    })
                }
            >
                <Tab.Screen name="Home" component={HomeStack}  />
                <Tab.Screen name="Safety Timer" component={SafetyTimerStack} />
                <Tab.Screen name="Settings" component={SettingStack} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}