import { useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import LottieView from 'lottie-react-native';


export default function VerifiedScreen({ navigation }) {
    
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('CreateSafetyCode');
        }, 3000);
        
        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <SafeAreaView style={{backgroundColor: '#3684C9', width: '100%', height: '100%'}}>
            <View style={{alignItems: 'center', justifyContent: 'center', height: '100%'}}>
                <Text style={{color:'white', fontFamily: 'Outfit-SemiBold', fontSize: 40}}>Account Verified</Text>
                <LottieView
                    style={{
                        width: '20%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    source={require('../../../assets/complete.json')}
                    autoPlay
                    loop={false}
                />
            </View>
        </SafeAreaView>
   )
}