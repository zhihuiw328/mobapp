import { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import HomeStack from './app/routes/HomeStack';

SplashScreen.preventAutoHideAsync();

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
    <HomeStack />
    // <View style={styles.container} onLayout={onLayoutRootView}>
    //   <StatusBar style="auto" />

    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});