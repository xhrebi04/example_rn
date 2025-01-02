import React from 'react';
import { Pressable } from 'react-native';

const PressableOpacity = ({ children, onPress, pressedOpacityRatio = 0.5 }) => (
    <Pressable
        onPress={onPress}
        style={({ pressed }) => [
            {
                opacity: pressed ? pressedOpacityRatio : 1,
            },
        ]}
    >
        {children}
    </Pressable>
);

export default PressableOpacity;
