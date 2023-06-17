import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    eventCardContainer: {
        margin: 5,
        marginLeft: 25,
        width: 320,
        height: 130,
        borderRadius: 20,
        shadowOpacity: 10,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        backgroundColor: "white",
        lineHeight: 60,
        fontSize: 35,
        color: "#fff",

    },
    name: {
        fontSize: 20,
        fontFamily: "Outfit-Regular",
        color: "black",
        marginLeft: 20,
        marginTop: 10
    },
    date: {
        fontSize: 20,
        fontFamily: "Outfit-SemiBold",
        color: "black",
        marginLeft: 20,
    },
    timer: {
        fontSize: 20,
        fontFamily: "Outfit-Regular",
        color: "#3684C9",
        marginLeft: 20,
    }
});


export default Styles;