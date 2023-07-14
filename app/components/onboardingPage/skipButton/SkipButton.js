import { View, TouchableOpacity, Text } from 'react-native';
import { CommonActions } from '@react-navigation/native';

import Styles from './Styles';



// Class for section rows
export default function SkipButton({ navigation }) {

    const nav = () => {
        navigation.navigate('Main');
        navigation.dispatch(
                CommonActions.reset({
                index: 0,
                routes: [
                    { name: 'Main' },
                ],
            })
        );
    };

    return (
        <View style={Styles.container}>
            <TouchableOpacity onPress={nav}>
                <Text style={Styles.text}>
                    SKIP
                </Text>
            </TouchableOpacity>
        </View>
    )
}

