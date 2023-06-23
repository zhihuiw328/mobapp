import { StyleSheet } from "react-native";


const ActiveTimerStyles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: '#3684C9',
    },
    title: {
        fontFamily: "Outfit-Bold",
        color: "white",
        fontSize: 30,
        marginTop: 160,
        marginLeft: 25,
    },
    timeView: {
        marginTop: 20,
        height: 80,
        width: '100%',
        backgroundColor: '#3684C9',
        shadowOpacity: .4,
        justifyContent: 'center',
        shadowOffset: {
            width: 1,
            height: 3,
        },
    },
    timeText: {
        fontFamily: "Outfit-Regular",
        color: "white",
        fontSize: 30,
        marginLeft: 25,
    },
    timeCurr: {
        fontFamily: "Outfit-Regular",
        color: "white",
        fontSize: 10,
        marginLeft: 25,
    },
    callView: { backgroundColor: '#C9524D',
    borderRadius: 10, 
    height: 50, 
    width: 130, 
    marginTop: 110, 
    marginLeft: 25, 
    alignItems: 'center', 
    justifyContent: 'center' 
    },
    whiteText: {
        fontFamily: "Outfit-Regular",
        color: "white",
        fontSize: 20,
    },
    text: {
        fontFamily: "Outfit-Regular",
        fontSize: 20,
    },
    alertView: { 
        backgroundColor: "white", 
        borderRadius: 10, 
        height: 50, 
        width: 160, 
        marginTop: 10, 
        marginLeft: 25, 
        alignItems: 'center', 
        justifyContent: 'center',
    },
    cancelView: { 
        backgroundColor: '#C9524D', 
        borderRadius: 10, 
        height: 50, 
        width: 170, 
        marginTop: 10, 
        marginLeft: 25, 
        alignItems: 'center', 
        justifyContent: 'center', 
    },
});


export default ActiveTimerStyles;