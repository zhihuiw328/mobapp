import { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, Modal } from 'react-native';


import ContactCard from '../../components/contactCard/ContactCard';
import SafetyNetworkStyles from '../../styles/setting/SafetyNetworkStyles';




export default function SafetyNetwork({ navigation, setNetwork, network}) {
  
    let [contacts, setContacts] = useState([]);

    return (
        <SafeAreaView style={SafetyNetworkStyles.safeView}>
            <View style={SafetyNetworkStyles.container}>
                <TouchableOpacity onPress={() => {navigation.navigate('Setting')}}>
                    <Text style={SafetyNetworkStyles.nav}>
                        BACK
                    </Text>
                </TouchableOpacity>

                <View>
                    <Text style={SafetyNetworkStyles.title}>Choose Contacts</Text>
                </View>

                <View style={SafetyNetworkStyles.marginTop_1}>
                    <Text style={SafetyNetworkStyles.text}>
                        Arc notifies your friends, family, and{'\n'}colleagues if you miss a check-in.
                    </Text>
                </View>

     
                <View style={SafetyNetworkStyles.marginTop_2}>
                    <ScrollView style={SafetyNetworkStyles.marginBottom_1}>
                        {contacts.map((contact, index) => {
                            return (
                                <>
                                    <ContactCard contact={contact} setNetwork={setNetwork} network={network} />
                                </>
                            )
                        })}
                        <View style={{marginBottom:'25%', height:150 }}>

                        </View>
                    </ScrollView>
                   
                    <View style={SafetyNetworkStyles.editButtonContainer}>

                        {/* Edit Button */}
                        <TouchableOpacity onPress={() => {navigation.navigate('Select Contact')}}>
                        <View style={SafetyNetworkStyles.button}>
                            <View>
                                <Image
                                    source={require('../../../assets/image/Pencil.png')} 
                                    style={SafetyNetworkStyles.img}
                                />
                            </View>
                            <View>
                                <Text style={SafetyNetworkStyles.buttonText}>
                                    Edit Network
                                </Text>
                            </View>
                        </View>
                        </TouchableOpacity>


                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}