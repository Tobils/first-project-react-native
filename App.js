import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View} from 'react-native'
import ProductComponent from './ProductComponent';
import FlexBox from './FlexBox';

const App = () => {
  return (
    <ScrollView style={{ margin: 20 }}>
      <Text style={style.title}>
        Product List
      </Text>

      <ScrollView horizontal>
        <ProductComponent></ProductComponent>
        <ProductComponent></ProductComponent>
        <ProductComponent></ProductComponent>
        <ProductComponent></ProductComponent>
        <ProductComponent></ProductComponent>
        <ProductComponent></ProductComponent>
      </ScrollView>

      <FlexBox></FlexBox>
    </ScrollView>

  )
};

const style = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16
  }
});

export default App;