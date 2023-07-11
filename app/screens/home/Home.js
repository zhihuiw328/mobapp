import { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, FlatList } from 'react-native';


import MockData from '../../data/MockData';
import TimerCard from '../../components/timerCard/TimerCard';
import EventCard from '../../components/eventCard/EventCard';
import RecordingCard from '../../components/recordingCard/RecordingCard';
import HomeStyles from '../../styles/home/HomeStyles';

export default function Home({ navigation }) {
    const [data, setdata] = useState(MockData);
    const [selectRecordingId, setSelectRecordingId] = useState(null);

    return (
        // <View> Home page! </View>
        
        <SafeAreaView style={HomeStyles.safeView}>
        <ScrollView style={HomeStyles.scrollView}>
            {/* user title */}
            <View style={HomeStyles.titleView}> 
                <Text style={HomeStyles.titleText}>Good evening,{'\n'}{data.User.userName}</Text>
            </View>


            {/* start a timer */}
            <View style={HomeStyles.sectionView}>
                <Text style={HomeStyles.sectionText}>Start a Safety Timer</Text>
            </View>

            <View style={HomeStyles.timerView}>
                <ScrollView horizontal={true} contentContainerStyle={HomeStyles.timerList} >
                    <TimerCard time={'15m'} />
                    <TimerCard time={'30m'} />
                    <TimerCard time={'1hr'} />
                    <TimerCard time={'1.5hr'} />
                    <TimerCard time={'2hr'} />
                </ScrollView>
            </View>

            <TouchableOpacity style={HomeStyles.buttonView}>
                <Text style={HomeStyles.buttonText}>
                    CUSTOM TIMER {">"}
                </Text>
            </TouchableOpacity>

            {/* upcoming events */}
            <View style={HomeStyles.sectionView}>
                <Text style={HomeStyles.sectionText}> 
                    Upcoming Events
                </Text>
            </View>
            <View style={HomeStyles.eventsView}>
                <FlatList
                    scrollEnabled={false}
                    keyExtractor={(item) => (item.id)}
                    style={HomeStyles.eventCardContainer}
                    data={data.User.events.slice(0, 3)}
                    renderItem={({ item: Event }) => (
                        <EventCard data={Event} />
                    )}
                />
            </View>
            <TouchableOpacity style={HomeStyles.buttonView} onPress={() => navigation.navigate("EventsPage")}>
                <Text style={HomeStyles.buttonText}>
                    VIEW ALL {">"} 
                </Text>
            </TouchableOpacity>


            {/* Recording */}
            <View style={HomeStyles.sectionView}>
                <Text style={HomeStyles.sectionText}>
                    Audio Recordings
                </Text>
            </View>
            <View style={HomeStyles.eventsView}>
                    <FlatList
                        scrollEnabled={false}
                        keyExtractor={(item) => (item.id)}
                        style={HomeStyles.eventCardContainer}
                        data={data.User.recordings.slice(0, 3)}
                        renderItem={({ item: Recording }) => (
                            <RecordingCard data={Recording} selectRecordingId={selectRecordingId} setSelectRecordingId={setSelectRecordingId} />
                        )}
                    />
            </View>
            <TouchableOpacity style={HomeStyles.buttonView} onPress={() => navigation.navigate("RecordingsPage")}>
                <Text style={HomeStyles.buttonText}>
                    VIEW ALL {">"} 
                </Text>
            </TouchableOpacity>

        </ScrollView>
        </SafeAreaView>
    )
}


