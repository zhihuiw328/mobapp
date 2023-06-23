import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/home/Home';
import Events from "../screens/home/Events";
import Recordings from "../screens/home/Recordings";


const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator 
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="HomePage" component={Home} />
            <Stack.Screen name="EventsPage" component={Events} />
            <Stack.Screen name="RecordingsPage" component={Recordings} />
        </Stack.Navigator>
    )
};