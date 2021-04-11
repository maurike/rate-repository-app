import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Stats from './Stats';
import Description from './Description';
import { useHistory } from 'react-router-native';

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

const RepositoryItem = ({ item }) => {
    let history = useHistory();

    const path = () => {
        history.push(`/repository/${item.id}`);
    };

    return (
        <Pressable onPress={path}>
            <View style={styles.container}>
                <Description item={item} />
                <Stats item={item} />
            </View>
        </Pressable>
    );
};

export default RepositoryItem;