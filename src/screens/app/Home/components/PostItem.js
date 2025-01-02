import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import PressableOpacity from '@/components/PressableOpacity';
import assets from '@/constants/assets';

const PostItem = ({ post }) => {
    const { title } = post || {};

    return (
        <PressableOpacity>
            <View style={styles.container}>
                <Text style={styles.text}>{title}</Text>
                <Image source={assets.chevron_right} style={styles.image} />
            </View>
        </PressableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 16,
        paddingHorizontal: 16,
        paddingVertical: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        flex: 1,
    },
    image: {
        width: 24,
        height: 24,
    },
});

export default PostItem;
