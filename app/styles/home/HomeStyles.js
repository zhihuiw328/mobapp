import { StyleSheet } from "react-native";


const HomeStyles = StyleSheet.create({
    settingsPageContainer: {
        backgroundColor: 'light-blue'
    },
    expandedEventCardContent: {
        flex: 1
    },
    timerView: {
        marginLeft: 30,
    },
    timerList: {
        horizontal: true
    },
    safeView: {
        // marginTop: 40,
        flex: 1,
        height: '100%',
        width: '100%',
    },
    scrollView: {
        // marginTop: 30,
        // overflow: 'visible',
    },
    titleView: {
        marginLeft: 30,
        marginRight: 30,
    },
    titleText: {
        fontFamily: "Outfit-Medium",
        color: "#3684C9",
        fontSize: 35,
    },
    sectionView: {
        marginTop: 25,
        marginLeft: 30,
        marginRight: 30,
    },
    sectionText: {
        fontFamily: "Outfit-Regular",
        color: "black",
        fontSize: 30,
    },
    buttonView: {
        marginTop: 5,
        marginLeft: 30,
        marginRight: 30,
    },
    buttonText: {
        fontFamily: "Outfit-Regular",
        color: "black",
        fontSize: 20,
    },
    eventsView: {
        marginTop: 10,
    },
    eventsScroll: {
        flex: 1,
    },
    eventCardContainer: {
        // flex: 1,
    },
    // recordingButtonView: {
    //     marginLeft: 30, 
    //     marginRight: 30, 
    // }
});

export default HomeStyles;