import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    cardMinimized: {
        justifyContent: 'center',
        margin: 5,
        marginLeft: 25,
        width: 320,
        height: 90,
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
        padding: 10,
    },
    cardMaximized: {
        margin: 5,
        marginLeft: 25,
        width: 320,
        height: 190,
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
    container: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'stretch',
        justifyContent: 'center',
        marginTop:25
    },
    name: {
        fontSize: 20,
        fontFamily: "Outfit-Regular",
        color: "black",
        marginLeft: 20,
    },
    date: {
        fontSize: 20,
        fontFamily: "Outfit-SemiBold",
        color: "black",
        marginLeft: 20,
    },
    view: {
        alignItems: 'center',
    },
    image: {
        marginLeft: 5, 
        marginTop: 5, 
        width: 15, 
        height: 15
    },
    expandContainer: {
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
        padding: 10,
    },
    sliderContainer: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'stretch',
        justifyContent: 'center',
        marginTop: 5,
    },
    rowContainer: {
        flexDirection: "row",
    },
    toLeft: {
        flexDirection: "row", 
        marginTop: 5, 
        marginLeft: 15, 
        justifyContent: "center", 
        alignItems: "center",
    },
    toRight: {
        flexDirection: "row", 
        marginTop: 5, 
        marginLeft: 15, 
        justifyContent: "center", 
        alignItems: "center", 
        marginLeft: '40%' 
    },
    icon: {
        width:30, 
        height:30,
    },
});


export default Styles;