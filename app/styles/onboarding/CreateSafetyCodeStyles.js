import {StyleSheet} from 'react-native'

export const CELL_SIZE = 75;
export const CELL_BORDER_RADIUS = 8;
export const DEFAULT_CELL_BG_COLOR = '#fff';
export const NOT_EMPTY_CELL_BG_COLOR = '#3557b7';
export const ACTIVE_CELL_BG_COLOR = '#f7fafe';

const CreateSafetyCodeStyles = StyleSheet.create({
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
        fontSize: 35,
        textAlign: 'center',
        fontFamily: "Outfit-Bold",
        color: "#fff",
    },
});

export default CreateSafetyCodeStyles;