import React from 'react';
import { View, StyleSheet, Pressable, Linking } from 'react-native';
import Stats from './Stats';
import Description from './Description';
import Text from './Text';
import { useParams } from 'react-router-native';
import { useQuery } from '@apollo/client';
import { GET_SINGLE_REPO } from '../graphql/queries';

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      flexShrink: 1,
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column',
      padding: 15
    },
    background: {
      backgroundColor: '#e1e4e8'
    },
    button: {
      flexGrow: 0,
      padding: 10,
      borderRadius: 5,
      backgroundColor: '#0366d6',
      alignSelf: 'stretch',
      marginTop: 20
    },
    text: {
      textAlign: 'center',
      color: '#ffffff'
    }
});

const SingleRepositoryView = () => {
    const { id } = useParams();

    const { data, error, loading } = useQuery(GET_SINGLE_REPO, {
        variables: { id: id },
        fetchPolicy: 'cache-and-network'
    });

    const openURL = () => {
        Linking.openURL(data.repository.url);
    };

    if (!loading && !error) {
        return (
            <View style={styles.background}>
                <View style={styles.container}>
                    <Description item={data.repository} />
                    <Stats item={data.repository} />
                    <Pressable onPress={openURL} style={styles.button}>
                        <Text style={styles.text}>Open in Github</Text>
                    </Pressable>
                </View>
            </View>
        );
    } else {
        return null;
    }
};

export default SingleRepositoryView;