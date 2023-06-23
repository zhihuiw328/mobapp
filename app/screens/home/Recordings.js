import { useState } from 'react';
import { View, Text, FlatList } from 'react-native';


import MockData from '../../data/MockData';
import RecordingCard from '../../components/recordingcard/RecordingCard';
import RecordingsStyles from '../../styles/home/RecordingsStyles';


export default function Recordings() {
    const [data, setdata] = useState(MockData);

    return (
        <View>
            <View style={RecordingsStyles.titleContainer}>
                <Text style={RecordingsStyles.titleText}>
                    Audio Recordings
                </Text>
            </View>
            <FlatList
                keyExtractor={(item) => (item.id)}
                contentContainerStyle={RecordingsStyles.contentContainer}
                data={data.User.recordings}
                renderItem={({ item: Recording }) => (
                    <RecordingCard data={Recording} />
                    )}
            />
        </View>
    )

}

