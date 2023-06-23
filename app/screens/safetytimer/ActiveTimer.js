import { View, Text } from 'react-native';

import ActiveTimerStyles from '../../styles/safetytimer/ActiveTimerStyles';


export default function ActiveTimer() {
    return (
        <View style={ActiveTimerStyles.container}>
            <Text style={ActiveTimerStyles.title}>
                Safety Timer {'\n'}Active
            </Text>

            <View style={ActiveTimerStyles.timeView}>
                <Text style={ActiveTimerStyles.timeText}>
                    0h 25m 00s 
                </Text>

                <Text style={ActiveTimerStyles.timeCurr}>
                    (12:56pm)
                </Text>
            </View>

            <View style={ActiveTimerStyles.callView}>
                <Text style={ActiveTimerStyles.whiteText} >
                    CALL 911
                </Text>
            </View>
            
            <View style={ActiveTimerStyles.alertView}>
                <Text style={ActiveTimerStyles.text}>
                    Early Alert
                </Text>
            </View>

            <View style={ActiveTimerStyles.cancelView}>
                <Text style={ActiveTimerStyles.whiteText} >
                    Cancel Timer
                </Text>
            </View>
        </View >
    )
}