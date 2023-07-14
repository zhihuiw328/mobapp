import {StyleSheet} from 'react-native'

export const CELL_SIZE = 64;
export const CELL_BORDER_RADIUS = 6;
export const DEFAULT_CELL_BG_COLOR = '#fff';
export const NOT_EMPTY_CELL_BG_COLOR = '#3557b7';
export const ACTIVE_CELL_BG_COLOR = '#f7fafe';

const CreateSafetyCodeStyles = StyleSheet.create({
    codeFiledRoot: {
        height: CELL_SIZE,
        marginTop: 40,
        justifyContent: 'center',
    },
    cell: {
        marginHorizontal: 8,
        justifyContent: 'center', // center text vertically
        alignItems: 'center', 
        width: CELL_SIZE,
        height: CELL_SIZE,
        borderRadius: CELL_BORDER_RADIUS,
        backgroundColor: "#68A3D6",
    },
    cellText:{
        fontSize: 35,
        fontFamily: "Outfit-Bold",
        color: "#fff",
    },
    buttonsView: { 
        marginTop: 30, 
        flexDirection: "row", 
        columnGap: 20, 
        marginLeft: 20 
    },
});

export default CreateSafetyCodeStyles;