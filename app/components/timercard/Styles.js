import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
    timerCardContainer: {
        marginTop: 10,
        margin: 5,
        height: 40,
        padding: 10,
        borderRadius: 5,
        shadowOpacity: .3,
        shadowOffset: {
            width: 1,
            height: 2,
        },
        backgroundColor: "white",
        lineHeight: 60,
        color: "#fff",
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        fontFamily: "Outfit-Regular",
        color: "black",
    }
});

export default Styles;