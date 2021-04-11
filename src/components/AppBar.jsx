import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import { useQuery, useApolloClient } from '@apollo/client';
import { GET_AUTHORIZED_USER } from '../graphql/queries';
import { useContext } from 'react';
import AuthStorageContext from '../contexts/AuthStorageContext';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 20,
    paddingBottom: 20,
    paddingLeft: 15,
    backgroundColor: '#0366d6',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
});

const AppBar = () => {
  const { data } = useQuery(GET_AUTHORIZED_USER);

  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();

  const logout = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-evenly' }}>
        <AppBarTab text="Repositories" link="/"></AppBarTab>

        {data?.authorizedUser ? (
          <AppBarTab text="Sign out" link="/signin" onPress={logout}></AppBarTab>
        ) : (
          <AppBarTab text="Sign in" link="/signin"></AppBarTab>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;