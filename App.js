import { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import HomeStack from './app/routes/HomeStack';
import Drawer from './app/routes/Drawer';


// SplashScreen.preventAutoHideAsync();



export default function App() {
  
  const [fontsLoaded] = useFonts({
    'Outfit-Bold': require('./assets/fonts/Outfit-Bold.ttf'),
    'Outfit-SemiBold': require('./assets/fonts/Outfit-Bold.ttf'),
    'Outfit-Regular': require('./assets/fonts/Outfit-Regular.ttf'),
    'Outfit-Medium': require('./assets/fonts/Outfit-Medium.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  
  if (!fontsLoaded) {
    return null;
  }
  
  return (
    // <View>
    //   <Text>
    //       hello world!
    //   </Text>
    // </View>
    // <HomeStack />
    <View style={styles.container}>
      <Drawer />
      {/* <StatusBar style="auto" /> */}
      {/* <HomeStack /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});