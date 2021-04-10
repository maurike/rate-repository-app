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
        <StatsItem number={item.stargazersCount} />
        <StatsItem number={item.forksCount} />
        <StatsItem number={item.reviewCount} />
        <StatsItem number={item.ratingAverage} />
    </View>
);

export default Stats;