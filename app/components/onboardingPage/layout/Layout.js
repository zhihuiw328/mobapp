import { View, SafeAreaView } from 'react-native';


import Styles from './Styles';



// Class for section rows
export default function Layout({ children }) {
    return (
        <SafeAreaView style={Styles.container}>
            <View style={Styles.body}>
                {children}
            </View>
        </SafeAreaView>
    )
}

