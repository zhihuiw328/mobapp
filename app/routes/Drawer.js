import { useContext, createRef, useEffect } from 'react';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';


import OnboardingStack from './OnboardingStack';
import HomeStack from './HomeStack';
import SafetyTimerStack from './SafetyTimerStack';
import SettingStack from './SettingStack';
import { AuthProvider, AuthContext } from '../components/auth/AuthProvider';

const AuthStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabScreen() {
    return(
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
    )
}

const navigationRef = createRef();

export default function Drawer() {

    const { isLoggedIn } = useContext(AuthContext);

    function navigate(name, params) {
        navigationRef.current?.navigate(name, params);
        navigationRef.current?.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [
                    { name: name },
                ],
            })
        );    
    }

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("Auth");
        } 
    }, [isLoggedIn]);


    return (
        <AuthProvider>
            <NavigationContainer ref={navigationRef}>
                <AuthStack.Navigator
                    presentation="card"
                    screenOptions={{ headerShown: false }}
                >   
                    
                    <AuthStack.Screen name="Main" component={MainTabScreen} />
                    <AuthStack.Screen name="Auth" component={OnboardingStack} />
                    
                    {/* <AuthStack.Screen name="Auth" component={OnboardingStack} />
                    <AuthStack.Screen name="Main" component={MainTabScreen}  /> */}
                </AuthStack.Navigator>
            </NavigationContainer>
        </AuthProvider>
    )
};