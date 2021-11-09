import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ApiCall from '../movie/api/api.js'

export default function App() {
  return (
    <View>
      <ApiCall/>
    </View>
  );
}

const styles = StyleSheet.create({});
