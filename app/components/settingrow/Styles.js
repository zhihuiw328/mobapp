import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    container: {
        marginBottom: 8,
        backgroundColor: 'transparent',
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
        justifyContent: 'center'

    },
    containerSection: {
        flex: 1,
        height: 50,
        justifyContent: 'center'

    },
    textSection: {
        flex: 1,
        textAlign: 'left',
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
        justifyContent: 'center',

    },
});

export default Styles;