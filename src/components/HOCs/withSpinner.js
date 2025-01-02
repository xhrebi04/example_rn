import colors from '@/theme/colors';
import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const withSpinner = (Component) => (props) => {
    const { loading } = props;

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator
                    size={'large'}
                    color={colors.black}
                    animating={true}
                />
            </View>
        );
    }

    return <Component {...props} />;
};

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: colors.white,
    },
});

export default withSpinner;
