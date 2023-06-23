import { useState } from 'react';
import { View, Text, FlatList } from 'react-native';


import MockData from '../../data/MockData';
import EventCard from '../../components/eventcard/EventCard';
import EventsStyles from '../../styles/home/EventsStyles';

export default function Events(props) {
    // const Events = props.data.User.events
    const [data, setdata] = useState(MockData);
    return (
        <View>
            <View style={EventsStyles.titleContainer}>
                <Text style={EventsStyles.titleText}>
                    Upcoming Events
                </Text>
            </View>
            <FlatList
                keyExtractor={(item) => (item.id)}
                contentContainerStyle={EventsStyles.contentContainer}
                data={data.User.events}
                renderItem={({ item: Event }) => (
                    <EventCard data={Event} />
                )}
            />
        </View>
    )
}


