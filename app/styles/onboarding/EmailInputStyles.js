import {StyleSheet} from 'react-native'

const EmailInputStyles = StyleSheet.create({
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
    titleText: {
        fontFamily: "Outfit-SemiBold",
        color: "#fff",
        fontSize: 40,
    },
    descptionText: {
        fontFamily: "Outfit-Regular",
        color: "#fff",
        fontSize: 18,
        marginTop: 10,
    },
    emailView: {
        marginTop: '17%',
        marginBottom: '7%',
    },
    emailText: { 
        color:'white', 
        fontFamily:'Outfit-SemiBold', 
        fontSize:16, 
        marginBottom:5
    },
    textInput: {
        fontSize: 18, 
        color: '#fff', 
        fontFamily:'Outfit-Bold',
        backgroundColor:'#68A3D6', 
        height:40, 
        width:350 
    },
    oot: { flex: 1, padding: 20 },
    title: { textAlign: 'center', fontSize: 30 },
    codeFieldRoot: { marginTop: 40, marginRight:10 },
    cell: {
        width: 30,
        height: 45,
        backgroundColor: "#68A3D6",
        lineHeight: 40,
        fontSize: 25,
        color: "#fff",
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        marginRight:2,
        fontFamily: "Outfit-Bold",
    },
    focusCell: {
         borderColor: '#000',
    },
});

export default EmailInputStyles;