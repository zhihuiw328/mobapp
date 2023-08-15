import AsyncStorage from '@react-native-async-storage/async-storage';


export const saveToken = async (name, token) => {
    try {
      await AsyncStorage.setItem(name, token);
    } catch (e) {
      console.error("Error saving token", e);
    }
};

export const getToken = async (name) => {
    try {
      return await AsyncStorage.getItem(name);
    } catch (e) {
      console.error("Error fetching token", e);
    }
};