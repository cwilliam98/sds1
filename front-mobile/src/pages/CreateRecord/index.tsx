import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Header from '../../components/Header';

const CreateRecord = () => {
  return (
    <>
      <Header />
      <Text>Hello CreateRecord</Text>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CreateRecord;
