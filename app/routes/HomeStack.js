import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/home/Home';
import Events from "../screens/home/Events";
import Recordings from "../screens/home/Recordings";


const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <NavigationContainer>
        <Stack.Navigator 
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Events" component={Events} />
            <Stack.Screen name="Recordings" component={Recordings} />
        </Stack.Navigator>
        </NavigationContainer>
    )
};