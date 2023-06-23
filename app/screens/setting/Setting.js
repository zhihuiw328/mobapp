import { View, ScrollView, Button, StyleSheet, SafeAreaView } from 'react-native'


import SettingRow from '../../components/settingrow/SettingRow';
import SettingButton from '../../components/settingbutton/SettingButton';
import SettingStyles from '../../styles/setting/SettingStyles';

export default function Setting({navigation}) {
    return (
        <ScrollView style={SettingStyles.scollContainer}>
        <View style={SettingStyles.viewContainer}>
            <SafeAreaView style={SettingStyles.safeView}>
                <SettingRow>
                    <SettingButton onPressCallback={() => navigation.navigate('SafetyNetwork')}  text="Safety Network" />
                    <SettingButton  text="Enable Audio Recordings"  />
                    <SettingButton  text="Edit Safety Code"  />
                    <SettingButton  text="Calendar Integration" />
                    <SettingButton  text="Cancel-Window Duration"  />
                    <SettingButton  text="View Payment Plan"  />
                    {/* <SettingButton onPressCallback={() => navigation.navigate('SignOut')} text="Sign Out"  /> */}
                    {/* <SettingButton onPressCallback={() => navigation.navigate('Delete')} text="Delete Account"  /> */}
                </SettingRow>
            </SafeAreaView>
        </View>     
        </ScrollView>
    )
}
