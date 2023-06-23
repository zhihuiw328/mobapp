import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import TimerInput from '../../components/timerinput/TimerInput';
import InputStyles from '../../styles/safetytimer/InputStyles';


export default function SafetyTimer({ navigation }) {
    const [time, setTime] = useState(0);

    function updateInput(input) {
        if (time == 0) {
            if (input == -1) {
                setTime(0);
            }
            setTime(input);
        } else if (input == -1) {
            if (input % 10 == 0) {
                setTime(time / 10);
            } else {
                setTime((time - (time % 10)) / 10);
            }
        } else {
            setTime(time * 10 + input);
        }
    }

    return (
        <View >
            <Text style={InputStyles.title}>
                New Safety Timer
            </Text>

            <View style={InputStyles.inputView}>
                <Text style={InputStyles.text}>
                    {time}m
                </Text>

            </View>

            <View style={InputStyles.keyBoardView}>
                <View style={InputStyles.keyBoardRow}>
                    <TouchableOpacity onPress={() => updateInput(1)}>
                        <TimerInput time={1} />
                    </TouchableOpacity >
                    <TouchableOpacity onPress={() => updateInput(2)}>
                        <TimerInput time={2} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => updateInput(3)}>
                        <TimerInput time={3} />
                    </TouchableOpacity>
                </View>

                <View style={InputStyles.keyBoardRow}>
                    <TouchableOpacity onPress={() => updateInput(4)}>
                        <TimerInput time={4} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => updateInput(5)}>
                        <TimerInput time={5} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => updateInput(6)}>
                        <TimerInput time={6} />
                    </TouchableOpacity>
                </View>

                <View style={InputStyles.keyBoardRow}>
                    <TouchableOpacity onPress={() => updateInput(7)}>
                        <TimerInput time={7} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => updateInput(8)}>
                        <TimerInput time={8} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => updateInput(9)}>
                        <TimerInput time={9} />
                    </TouchableOpacity>
                </View>

                <View style={InputStyles.keyBoardRow}>
                    <TouchableOpacity onPress={() => updateInput(-1)}>
                        <TimerInput time={-1} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => updateInput(0)}>
                        <TimerInput time={0} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> navigation.navigate("ActiveTimer")}>
                        <TimerInput time={-2} />
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    )

}
