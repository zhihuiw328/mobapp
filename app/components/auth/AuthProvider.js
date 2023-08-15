import React, { useEffect, useState, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({
    isLoggedIn: false,
    checkAuth: () => {}
});

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const isTokenExpired = async (token) => {
        try {
            const response = await axios.post("http://localhost:3000/api/checkToken", { token: token });
            return response.data.valid;
        } catch(e) {
            return false;
        }
    };

    const checkAuth = async () => {
        const token = await AsyncStorage.getItem("userToken");
        if (token) {
            isTokenExpired(token).then(isvalid => {
                if (isvalid) {
                    setIsLoggedIn(true);
                } else {
                    setIsLoggedIn(false);
                }
            });
        } else {
            setIsLoggedIn(false);
        }
    };

    useEffect(() => {
        checkAuth();
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, checkAuth }}>
            {children}
        </AuthContext.Provider>
    );
};