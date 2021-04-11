import React from 'react';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import SignIn from './SignIn';
import AppBar from './AppBar';
import { Route, Switch, Redirect } from 'react-router-native';
import SingleRepositoryView from './SingleRepositoryView';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: '#e1e4e8'
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
        <AppBar />
        <Switch>
          <Route path="/" exact>
            <RepositoryList />
          </Route>
          <Route path="/signin" exact>
            <SignIn />
          </Route>
          <Route path="/repository/:id" exact>
            <SingleRepositoryView />
          </Route>
          <Redirect to="/" />
        </Switch>
    </View>
  );
};

export default Main;