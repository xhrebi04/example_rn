import React from 'react';
import { StyleSheet, View } from 'react-native';

const PostListSeparator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
    separator: {
        marginVertical: 8,
    },
});

export default PostListSeparator;
