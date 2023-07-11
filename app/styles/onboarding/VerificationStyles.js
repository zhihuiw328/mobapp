import {StyleSheet} from 'react-native';

export const CELL_SIZE = 45;
export const CELL_BORDER_RADIUS = 8;
export const DEFAULT_CELL_BG_COLOR = '#fff';
export const NOT_EMPTY_CELL_BG_COLOR = '#3557b7';
export const ACTIVE_CELL_BG_COLOR = '#f7fafe';


const VerificationStyles = StyleSheet.create({
    title: {
        fontFamily: "Outfit-SemiBold",
        color: "#fff",
        fontSize: 40,
    },
    text: {
        fontFamily: "Outfit-Regular",
        color: "#fff",
        fontSize: 18,
        marginTop: 10,
    },
    resendView: { 
      marginTop: 10,
    },
    resendText: {
      fontFamily: "Outfit-Medium",
      color: "#fff",
      fontSize: 18,
    },
    root: { flex: 1, padding: 20 },
    codeFiledRoot: {
      height: CELL_SIZE,
      marginTop: 40,
      paddingHorizontal: 20,
      justifyContent: 'center',
    },
    cell: {
        marginHorizontal: 8,
        width: CELL_SIZE,
        height: CELL_SIZE,
        borderRadius: CELL_BORDER_RADIUS,
        backgroundColor: "#68A3D6",
    },
    cellText:{
        // lineHeight: CELL_SIZE - 5,
        fontSize: 35,
        textAlign: 'center',
        fontFamily: "Outfit-Bold",
        color: "#fff",
    },
    // cell: {
    //   width: CELL_SIZE,
    //   height: CELL_SIZE,
    //   backgroundColor: "#68A3D6",
    //   lineHeight: 60,
    //   fontSize: 35,
    //   color: "#fff",
    //   alignItems: 'center',
    //   textAlign: 'center',
    //   justifyContent: 'center',
    //   marginRight: 15,
    //   fontFamily: "Outfit-Bold",
    //   borderRadius:25,
    // },
    focusCell: {
      borderColor: '#000',
    },
}); 

export default VerificationStyles;