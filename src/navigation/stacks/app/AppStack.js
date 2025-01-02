import React from 'react';
import HomeScreen from '@/screens/app/Home/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AppStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    );
};

export default AppStack;
