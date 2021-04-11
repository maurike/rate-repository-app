import React from 'react';
import FormikTextInput from './FormikTextInput';
import { View, Pressable, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      padding: 20,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    button: {
      flexGrow: 0,
      padding: 10,
      borderRadius: 5,
      backgroundColor: '#0366d6',
      alignSelf: 'stretch'
    },
    text: {
      textAlign: 'center',
      color: '#ffffff'
    }
});

const SignInForm = ({ onSubmit }) => {
    return (
        <View style={styles.container}>
            <FormikTextInput name="username" placeholder="Username" style={styles.textInput} />
            <FormikTextInput name="password" placeholder="Password" style={styles.textInput} secureTextEntry={true} />
            <Pressable onPress={onSubmit} style={styles.button} testID='submit'>
                <Text style={styles.text}>Sign in</Text>
            </Pressable>
        </View>
    );
};

export default SignInForm;