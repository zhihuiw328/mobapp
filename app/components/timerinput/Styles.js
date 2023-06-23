import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    timeContainer: {
        marginTop: 10,
        margin: 5,
        height: 65,
        width: 90,
        padding: 10,
        borderRadius: 15,
        shadowOpacity: .35,
        shadowOffset: {
            width: 1,
            height: 3,
        },
        backgroundColor: "white",
        color: "#fff",
        justifyContent: 'center',
        alignItems: 'center'
    },
    timeContainerFilled: {
        marginTop: 10,
        paddingRight:5,
        margin: 5,
        height: 65,
        width: 90,
        padding: 10,
        borderRadius: 15,
        shadowOpacity: .35,
        shadowOffset: {
            width: 1,
            height: 3,
        },
        backgroundColor: "#3684C9",
        color: "#fff",
        justifyContent: 'center',
        alignItems: 'center'
    },
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderTopWidth: 12,
        borderRightWidth: 0,
        borderBottomWidth: 12,
        borderLeftWidth: 20,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'transparent',
        borderLeftColor: 'white',
    },
    image: {
        flex: 1,
        aspectRatio: 1,
        tintColor: '#3684C9',
    },
    text: {
        fontSize: 30,
        fontFamily: "Outfit-Regular",
        color: "#3684C9",
        textAlign: 'center',
}
});

export default Styles;