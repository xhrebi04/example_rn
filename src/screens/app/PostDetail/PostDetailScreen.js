import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import colors from '@colors';
import withSpinner from '@components/HOCs/withSpinner';

import usePostDetail from './hooks/usePostDetail';

const ScrollViewWithSpinner = withSpinner(ScrollView);

const PostDetailScreen = ({ route }) => {
    const { postId } = route?.params || {};
    const { loading, post } = usePostDetail([postId]);

    const { title, body } = post || {};

    return (
        <ScrollViewWithSpinner
            loading={loading}
            style={styles.container}
            contentContainerStyle={styles.contentContainerStyle}
        >
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text>{body}</Text>
            </View>
        </ScrollViewWithSpinner>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    contentContainerStyle: {
        padding: 16,
    },
    title: {
        fontWeight: 'bold',
    },
    contentContainer: {
        gap: 16,
    },
});

export default PostDetailScreen;
