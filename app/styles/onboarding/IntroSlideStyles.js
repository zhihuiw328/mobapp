import {StyleSheet, Dimensions} from 'react-native';

const { width } = Dimensions.get('window');

const IntroSlideStyles = StyleSheet.create({
    container: {
        backgroundColor: '#3684C9', 
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: "center",
    },
    body: {
        marginTop:'40%',
    },
    titleView: {
        marginTop: '20%', 
    },
    titleText: {
        fontFamily: "Outfit-SemiBold",
        color: "#fff",
        fontSize: 40,
    },
    descriptionView: { 
        marginTop: '5%',
        width: '100%',
        alignItems: "center", 
    },
    descriptionText: {
        fontFamily: "Outfit-Regular",
        color: "#fff",
        fontSize: 20,
    },
    pageView: {
        marginTop: 30,
    //   backgroundColor: 'white',
        width: width ,
        height: 400,
    //   margin: 10,
    //   height: 350,
    //   borderRadius: 10,
        alignItems: 'center',
    },
    content: {
        width: '80%',
        backgroundColor: 'white',
        height: 400,
        borderRadius: 10,
    },
    contentTitle: {
        fontFamily: "Outfit-SemiBold", 
        fontSize:24, 
        marginTop:20, 
        marginLeft:20
    },
    imageContainer: {
        alignItems: "center", 
        marginTop:'20%',
    },
    image: {
        width: 270,
        height: 60,
    },
    contentText: {
        fontFamily: "Outfit-Regular", 
        fontSize:16, 
        padding: 20,
        // marginLeft:20, 
        marginTop:35, 
        // marginBottom: 20,
    },
    buttonView: {
        backgroundColor: "#fff",
        width: 170,
        height: 50,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    buttonText: { 
        color: "#3684C9", 
        fontSize: 24, 
        fontFamily: "Outfit-Regular" 
    },
});

export default IntroSlideStyles;