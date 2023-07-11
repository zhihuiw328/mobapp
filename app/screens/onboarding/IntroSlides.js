import { View, SafeAreaView, Text, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native'


import ContinueButton from '../../components/onboardingPage/continueButton/ContinueButton';
import IntroSlideStyles from '../../styles/onboarding/IntroSlideStyles'



const { width } = Dimensions.get('window');

export default function IntroSlides({ navigation }) {



    return (
        <SafeAreaView style={IntroSlideStyles.container}>
        
            {/* Title */}
            <View style={IntroSlideStyles.titleView}>
                <Text style={IntroSlideStyles.titleText}>
                    Welcome to Arc
                </Text>
            </View>

            {/* Description */}
            <View style={IntroSlideStyles.descriptionView}>
                <Text style={IntroSlideStyles.descriptionText}>
                    Here are the ways we'll keep{'\n'}you safe at your next showing:
                </Text>
            </View>


            <View style={{height: 450,}}>
            <ScrollView
                pagingEnabled={true}
                horizontal= {true}
                decelerationRate={0}
                showsHorizontalScrollIndicator={false}
            >
                
                {/* Safety timer */}
                <View style={IntroSlideStyles.pageView}>
                    <View style={IntroSlideStyles.content}>
                    <Text style={IntroSlideStyles.contentTitle}>Safety Timer</Text>
                    <View style={IntroSlideStyles.imageContainer}>
                      <Image
                      source={require('../../../assets/image/SafetyTimer.png')}
                      style={IntroSlideStyles.image}
                      />
                    </View>
                    <Text style={IntroSlideStyles.contentText}>Safety timers are used to check in on you periodically during a showing. If something is wrong, we’ll know once thetimer runs down, if not sooner.</Text>
                    </View>
                </View>

                {/* Safety Pin */}
                <View style={IntroSlideStyles.pageView}>
                    <View style={IntroSlideStyles.content}>
                    <Text style={IntroSlideStyles.contentTitle}>Safety Pin</Text>
                    <View style={{alignItems: "center", marginTop:'20%',}}>
                      <Image
                      source={require('../../../assets/image/SafetyPin.png')}
                      style={{
                        width: 270,
                        height: 60,
                      }}
                      />
                    </View>
                    <Text style={IntroSlideStyles.contentText}>
                    Create your own personal Safety Pin. Arc will use this to verify that you’re safe—keep it secret so we know it’s really you.
                    </Text>
                    </View>
                </View>

                {/* Safety Network Alerts */}
                <View style={IntroSlideStyles.pageView}>
                    <View style={IntroSlideStyles.content}>
                    <Text style={IntroSlideStyles.contentTitle}>Safety Network Alerts</Text>
                    <View style={IntroSlideStyles.imageContainer}>
                      <Image
                      source={require('../../../assets/image/SafetyNetwork.png')}
                      style={{
                        height: 77,
                        width: 210,
                      }}
                      />
                    </View>
                    <Text style={IntroSlideStyles.contentText}>
                    Your Safety Network consists of your friends, family, and co-workers you’ve selected. If an alert is triggered, either manually or through a safety timer, they’ll know right away.  
                    </Text>
                    </View>
                </View>

                 {/* Safety Integration */}
                 <View style={IntroSlideStyles.pageView}>
                    <View style={IntroSlideStyles.content}>
                    <Text style={IntroSlideStyles.contentTitle}>Calendar Integration</Text>
                    <View style={IntroSlideStyles.imageContainer}>
                        <Image
                        source={require('../../../assets/image/CalendarIntegration.png')}
                        style={{
                            height: 100,
                            width: 100,
                        }}
                        />
                    </View>
                    <Text style={IntroSlideStyles.contentText}>
                        Never forget to start a timer by letting Arc automatically schedule them for you by syncing with your work calendar.  
                    </Text>
                    </View>
                </View>

                
                {/* Audio */}
                <View style={IntroSlideStyles.pageView}>
                    <View style={IntroSlideStyles.content}>
                    <Text style={IntroSlideStyles.contentTitle}>Automatic Audio Recordings</Text>
                    <View style={IntroSlideStyles.imageContainer}>
                        <Image
                        source={require('../../../assets/image/Audio.png')}
                        style={{
                            height: 100,
                            width: 100,
                        }}
                        />
                    </View>
                    <Text style={IntroSlideStyles.contentText}>
                    Arc can also record audio clips in the event of a presumed emergency to help others get a better understanding of the situation.  
                    </Text>
                    </View>
                </View>

            </ScrollView>
            </View>
                        

            <ContinueButton navigation={navigation} route={'EmailInput'}/>

        </SafeAreaView>
    )
}


