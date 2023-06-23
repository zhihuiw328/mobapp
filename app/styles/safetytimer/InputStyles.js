import { StyleSheet } from "react-native";


const InputStyles = StyleSheet.create({
    title: {
        fontFamily: "Outfit-Regular",
        color: "black",
        fontSize: 30,
        marginTop: 145,
        marginLeft: 20, 
    },
    inputView: {
        marginTop: 20,
        height: 80,
        width: '100%',
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    text: {
        marginLeft: 25,
        fontSize: 50,
        fontFamily: "Outfit-Regular",
    },
    keyBoardView: {
        alignItems: 'center',
    },
    keyBoardRow: {
        flexDirection: 'row',
    }
});

export default InputStyles;