import {StyleSheet} from 'react-native';


const EnablePermissionStyles = StyleSheet.create({
    textBold: {
        fontFamily: "Outfit-SemiBold",
        color: "#fff",
        fontSize: 16,
    },
    textRegular: {
        fontFamily: "Outfit-Regular",
        color: "#fff",
        fontSize: 18,
    },
    enableButton: {
        width: 250,
        height: 50,
        marginTop:15,
        backgroundColor: '#FFE27D',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: "center",
        shadowOpacity: 10,
        shadowOffset: {
            width: 0,
            height: 3,
        },
    },
    enableText: { 
        color: "#000", 
        fontSize: 24, 
        fontFamily: "Outfit-Regular" 
    },
    buttonsView: { 
        marginTop: 30, 
        flexDirection: "row", 
        columnGap: 20, 
    },
});

export default EnablePermissionStyles;