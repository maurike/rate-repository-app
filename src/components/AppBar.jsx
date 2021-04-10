import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';

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
  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-evenly' }}>
        <AppBarTab text="Repositories" link="/"></AppBarTab>
        <AppBarTab text="Sign in" link="/signin"></AppBarTab>
      </ScrollView>
    </View>
  );
};

export default AppBar;