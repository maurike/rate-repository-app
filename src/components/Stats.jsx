import React from 'react';
import { View, StyleSheet } from 'react-native';
import StatsItem from './StatsItem';

const styles = StyleSheet.create({
    stats: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginTop: 15
    }
});

const Stats = ({ item }) => (
    <View style={styles.stats}>
        <StatsItem number={item.stargazersCount} testID='stargazers' />
        <StatsItem number={item.forksCount} testID='forks' />
        <StatsItem number={item.reviewCount} testID='reviews' />
        <StatsItem number={item.ratingAverage} testID='rating' />
    </View>
);

export default Stats;