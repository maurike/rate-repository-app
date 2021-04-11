import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import Text from './Text';

const styles = StyleSheet.create({
    text: {
        color: '#ffffff'
    }
});

const AppBarTab = ({ text, link, onPress }) => {
  return (
    <Pressable>
      <Link to={link} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </Link>
    </Pressable>
  );
};

export default AppBarTab;