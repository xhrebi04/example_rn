import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@screens/app/Home/HomeScreen';
import PostDetailScreen from '@screens/app/PostDetail/PostDetailScreen';

const AppStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen
                name="PostDetail"
                component={PostDetailScreen}
                options={{ title: 'Post Detail' }}
            />
        </Stack.Navigator>
    );
};

export default AppStack;
