import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
    avatar: {
      borderRadius: 5,
    },
    column: {
      flexShrink: 1,
      flexDirection: 'column',
      flexWrap: 'wrap',
      paddingLeft: 15,
      paddingRight: 15,
      alignItems: 'flex-start'
    },
    language: {
      borderRadius: 5,
      padding: 5,
      marginTop: 5,
      backgroundColor: theme.colors.primary,
    },
    row: {
      flexDirection: 'row'
    }
});

const Description = ({ item }) => (
  <View style={styles.row}>
      <Image style={styles.avatar} 
          source={{ uri: item.ownerAvatarUrl, width: 50, height: 50 }} />
      <View style={styles.column}>
          <Text fontWeight="bold" testID='fullname'>{item.fullName}</Text>
          <Text testID='description'>{item.description}</Text>
          <View style={styles.language}>
            <Text color="textTertiary" testID='language'>{item.language}</Text>
          </View>
      </View>
  </View>
);

export default Description;