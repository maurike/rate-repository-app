import React from 'react';
import { View, StyleSheet } from 'react-native';
import Stats from './Stats';
import Description from './Description';

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      flexShrink: 1,
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column',
      padding: 15
    }
});

const RepositoryItem = ({ item }) => (
    <View style={styles.container}>
        <Description item={item} />
        <Stats item={item} />
    </View>
);

export default RepositoryItem;