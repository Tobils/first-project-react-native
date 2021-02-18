import React from 'react';
import { ScrollView, StyleSheet, Text, View} from 'react-native'
import ProductList from './pages/ProductList'
import FlexBox from './pages/FlexBox' 
import Position from './pages/Position'
import ProfileList from './pages/ProfileList'

const App = () => {
  return (
    <ScrollView style={{ margin: 20 }}>
      <Text style={style.title}>
        Product List
      </Text>

      <ScrollView horizontal>
        <ProductList></ProductList>
        <ProductList></ProductList>
        <ProductList></ProductList>
        <ProductList></ProductList>
        <ProductList></ProductList>
      </ScrollView>

      <Position/>

      <FlexBox/>

      <View>
        
        <Text style={style.title}>FlexBox Layouting Profile</Text> 
        <ScrollView horizontal>
          <ProfileList/>
          <ProfileList/>
          <ProfileList/>
          <ProfileList/>
          <ProfileList/>
          <ProfileList/>
        </ScrollView>
      </View>

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