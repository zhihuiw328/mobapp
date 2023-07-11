import { createStackNavigator } from '@react-navigation/stack';


import IntroSlides from '../screens/onboarding/IntroSlides';
import EmailInput from '../screens/onboarding/EmailInput';
import Verification from '../screens/onboarding/Verification';
import VerifiedScreen from '../screens/onboarding/VerifiedScreen';
import CreateSafetyCode from '../screens/onboarding/CreateSafetyCode';


const Stack = createStackNavigator();


export default function OnboardingStack() {
    return (
        <Stack.Navigator 
            // initialRouteName="Home"
            screenOptions={{ headerShown: false }}
        >
            {/* <Stack.Screen name="CreateSafetyCode" component={CreateSafetyCode} /> */}
            <Stack.Screen name="IntroSlides" component={IntroSlides} />
            <Stack.Screen name="EmailInput" component={EmailInput} />
            <Stack.Screen name="Verification" component={Verification} />
            <Stack.Screen name="VerifiedScreen" component={VerifiedScreen} />
        </Stack.Navigator>
    )
};