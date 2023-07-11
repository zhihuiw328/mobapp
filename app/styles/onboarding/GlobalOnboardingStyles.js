import {StyleSheet} from 'react-native';


const GlobalOnboardingStyles = StyleSheet.create({
    safetyArea: {
        backgroundColor: '#3684C9', 
        width: '100%', 
        height: '100%',
        flex: 1,
        alignItems: "center",
    },
    body: {
        top: "40%",
    },
    stepText: {
        fontFamily: "Outfit-SemiBold",
        color: "#fff",
        fontSize: 16,
    },
    titleText: {
        fontFamily: "Outfit-SemiBold",
        color: "#fff",
        fontSize: 40,
    },
    descriptionText: {
        fontFamily: "Outfit-Regular",
        color: "#fff",
        fontSize: 18,
    },
    
});

export default GlobalOnboardingStyles;