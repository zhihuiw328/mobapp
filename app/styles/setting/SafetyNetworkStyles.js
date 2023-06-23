import { StyleSheet } from "react-native";


const SafetyNetworkStyles = StyleSheet.create({
    safeView: {
        backgroundColor: "#F8F8F8",
    },
    container: {
        marginTop:'10%', 
        marginLeft:'10%', 
        marginBottom:100 
    },
    nav: {
        fontSize:16, 
        fontFamily: 'Outfit-Regular', 
        color:'#3684C9',
    },
    title: {
        fontFamily: "Outfit-Medium",
        color: "#000",
        fontSize: 32,
    },
    marginTop_1: {
        marginTop:'3%',
    }, 
    marginTop_2: {
        marginTop:'5%', 
    },
    marginBottom_1: {
        marginBottom: 200,
    },
    text: {
        fontFamily: "Outfit-Regular",
        color: "#000",
        fontSize: 20,
    },
    editButtonContainer: { 
        marginTop: '120%', 
        flexDirection: "row", 
        marginLeft:0,  
        position: 'absolute', 
        zIndex: 9999,
    },
    button: {
        backgroundColor: "#3684C9",
        width: 200,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: "center", 
        flexDirection: "row", shadowOpacity: 10,
        shadowOffset: {
            width: 0,
            height: 4,
        }, 
        flexDirection: "row",
    },
    img: {
        width:20, 
        height:20, 
        marginRight:10,
    },
    buttonText: { 
        color: "#fff", 
        fontSize: 20, 
        fontFamily: "Outfit-Regular",
    },
});

export default SafetyNetworkStyles;