import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
    statsColumn: {
      flexDirection: 'column',
      alignItems: 'center'
    }
});

const handleNumber = (number) => {
    if (number >= 1000) {
        number = Math.round(number / 1000 * 10) / 10 + 'k';
    }

    return number;
};

const Stats = ({ number, testID }) => (
    <View style={styles.statsColumn}>
        <Text fontWeight="bold" testID={testID}>{handleNumber(number)}</Text>
        <Text>Stars</Text>
    </View>
);

export default Stats;