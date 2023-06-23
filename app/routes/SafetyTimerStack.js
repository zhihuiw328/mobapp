import { createStackNavigator } from '@react-navigation/stack';

import SafetyTimer from '../screens/safetytimer/SafetyTimer';
import ActiveTimer from '../screens/safetytimer/ActiveTimer';

const Stack = createStackNavigator();

export default function SafetyTimerStack() {
    return (
        
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SafetyTimer" component={SafetyTimer} ></Stack.Screen>
            <Stack.Screen name="ActiveTimer" component={ActiveTimer}></Stack.Screen>
        </Stack.Navigator>

    )
}