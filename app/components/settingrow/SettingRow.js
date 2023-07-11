import { Component } from 'react';
import { View, Text } from 'react-native';


import Styles from '../timerInput/Styles';



// Class for section rows
class SettingRow extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <View style={Styles.containerSection}>
                    <View>
                        <Text style={Styles.textSection} numberOfLines={1} ellipsizeMode={'tail'}>
                            {this.props.text}
                        </Text>
                    </View>
                </View>
                <View>{this.props.children}</View>
            </View>
        )
    }
}

export default SettingRow;