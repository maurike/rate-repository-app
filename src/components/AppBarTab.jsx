import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import Text from './Text';

const styles = StyleSheet.create({
    text: {
        color: '#ffffff'
    }
});

const onPressFunction = () => {
    console.log('test');
};

const AppBarTab = ({ text, link }) => {
  return (
    <Pressable onPress={onPressFunction}>
      <Link to={link}>
        <Text style={styles.text}>{text}</Text>
      </Link>
    </Pressable>
  );
};

export default AppBarTab;