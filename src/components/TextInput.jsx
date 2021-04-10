import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    textInput: {
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        borderColor: 333333,
        borderWidth: 2,
        backgroundColor: '#ffffff',
        alignSelf: 'stretch'
      },
      textInputError: {
        borderColor: '#d73a4a'
      }
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.textInput, error && styles.textInputError, style];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;