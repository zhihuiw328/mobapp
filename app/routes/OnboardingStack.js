import { createStackNavigator } from '@react-navigation/stack';


import IntroSlides from '../screens/onboarding/IntroSlides';
import EmailInput from '../screens/onboarding/EmailInput';
import Verification from '../screens/onboarding/Verification';
import VerifiedScreen from '../screens/onboarding/VerifiedScreen';
import CreateSafetyCode from '../screens/onboarding/CreateSafetyCode';
import ConfirmSafetyCode from '../screens/onboarding/ConfirmSafetyCode';
import CalendarIntegration from '../screens/onboarding/CalenderIntegration';
import EnablePermission from '../screens/onboarding/EnablePermission';
import CreateNetwork from '../screens/onboarding/CreateNetwork';


const Stack = createStackNavigator();


export default function OnboardingStack() {
    return (
        <Stack.Navigator 
            // initialRouteName="Home"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="IntroSlides" component={IntroSlides} />
            <Stack.Screen name="EmailInput" component={EmailInput} />
            <Stack.Screen name="Verification" component={Verification} />
            <Stack.Screen name="VerifiedScreen" component={VerifiedScreen} />
            <Stack.Screen name="CreateSafetyCode" component={CreateSafetyCode} />
            <Stack.Screen name="ConfirmSafetyCode" component={ConfirmSafetyCode} />
            <Stack.Screen name="CalendarIntegration" component={CalendarIntegration} />
            <Stack.Screen name="EnablePermission" component={EnablePermission} />
            <Stack.Screen name="CreateNetwork" component={CreateNetwork} />
        </Stack.Navigator>
    )
};