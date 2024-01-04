import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import * as Yup from 'yup';

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Should be of min of 4 characters')
    .max(16, 'Should be of max of 16 characters')
    .required('Length is required'),
});

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>App</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
