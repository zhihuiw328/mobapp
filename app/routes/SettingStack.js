import { createStackNavigator } from '@react-navigation/stack';

import Setting from '../screens/setting/Setting';
import SafetyNetwork from '../screens/setting/SafetyNetwork';

const Stack = createStackNavigator();

export default function SettingStack() {
    return (

        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Setting" component={Setting}></Stack.Screen>
            <Stack.Screen name="SafetyNetwork" component={SafetyNetwork}></Stack.Screen>
        </Stack.Navigator>

    )
}