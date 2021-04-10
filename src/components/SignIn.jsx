import React from 'react';
import FormikTextInput from './FormikTextInput';
import { View, Pressable, Text, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

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

const initialValues = {
    username: '',
    password: ''
};

const validationSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required')
});

const SignInForm = ({ onSubmit }) => {
    return (
        <View style={styles.container}>
            <FormikTextInput name="username" placeholder="Username" style={styles.textInput} />
            <FormikTextInput name="password" placeholder="Password" style={styles.textInput} secureTextEntry={true} />
            <Pressable onPress={onSubmit} style={styles.button}>
                <Text style={styles.text}>Sign in</Text>
            </Pressable>
        </View>
    );
};

const onSubmit = (values) => {
    console.log(values);
};

const SignIn = () => {
  return (
    <Formik 
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}>
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;