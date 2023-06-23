import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    container: {
        paddingTop:7, 
        paddingBottom:7, 
        justifyContent: 'center',
    },
    containerSecond: {
        flex: 1, 
        height: 50,
        borderRadius: 1,
        borderBottomWidth: 0.2,
        justifyContent: 'center',
    },
    containerThird: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        flex: 20,
        flexDirection: 'row',
        fontSize: 20,
        color: 'black',
        fontFamily: 'Outfit-Regular', 
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Styles;