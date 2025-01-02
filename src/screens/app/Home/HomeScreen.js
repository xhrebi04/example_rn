import React from 'react';
import { FlatList, RefreshControl, StyleSheet } from 'react-native';
import useHome from './hooks/useHome';
import PostItem from './components/PostItem';
import PostListSeparator from './components/PostListSeparator';
import colors from '@/theme/colors';
import withSpinner from '@/components/HOCs/withSpinner';

const FlatListWithSpinner = withSpinner(FlatList);

const HomeScreen = () => {
    const { loading, refreshing, onRefresh, posts } = useHome();

    const renderItem = ({ item }) => <PostItem post={item} />;

    return (
        <FlatListWithSpinner
            loading={loading}
            data={posts}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={<PostListSeparator />}
            contentContainerStyle={styles.contentContainerStyle}
            style={styles.style}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
        />
    );
};

const styles = StyleSheet.create({
    contentContainerStyle: {
        padding: 16,
    },
    style: {
        backgroundColor: colors.white,
    },
});

export default HomeScreen;
