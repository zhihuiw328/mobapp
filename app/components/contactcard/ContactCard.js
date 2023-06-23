import { useState } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';


import Styles from './Styles';

const ContactCard = ({contact}) => {
    const [isPressed, setIsPressed] = useState(false)
    const [network, setNetwork] = useState([])

    function addToList () {
        const index = network.indexOf(contact);
        if (index !== -1) {
            let tempNet = network;
            tempNet.splice(index, 1);
            setNetwork(tempNet);
          } else {
            setNetwork(network => [...network, contact]);
          }
        };

    let getPhoneNumbers = (contact) => {
        if (contact.phoneNumbers) {
            return contact.phoneNumbers.map((phoneNumber, index) => {
                return (
                    <>
                        <Text style={{fontSize:16, fontFamily: 'Outfit-Regular', color: isPressed ? '#fff' : '#000'}}>
                            {phoneNumber.number}
                        </Text>
                    </>
                )
            })
        } 
    }

  return (
    <TouchableOpacity 
        onPress={() => {setIsPressed(!isPressed), addToList(), console.log(network)}}
        style={[Styles.container, isPressed && Styles.buttonPressed]}
    >
        <View style={Styles.buttonView}>
            <Text style={[Styles.text, isPressed && Styles.textPressed]}>
                {contact.firstName} 
                {contact.lastName}
            </Text>
            {getPhoneNumbers(contact)}
        </View>
    </TouchableOpacity>
  )
}

export default ContactCard;