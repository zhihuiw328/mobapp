//taken from http://github.com/Mazurco066
import { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


import Styles from './Styles';

// Class for navigate rows
class SettingButton extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPressCallback}>
                <View style={Styles.container}>
                <View style={Styles.containerSecond}>
                    <View style={Styles.containerThird}>
                        <Text style={Styles.text} numberOfLines={1} ellipsizeMode={'tail'}>
                            {this.props.text}
                        </Text>
                    </View>
                </View>
                </View>
            </TouchableOpacity>
        )
    }
}

export default SettingButton;