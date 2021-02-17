import React from 'react';
import {Image, ScrollView, Text, TextInput, View} from 'react-native'
import {AppBasic} from './AppBasicComponent'
const App = () => {
  return (
    <View>
      <AppBasic></AppBasic>
    </View>
  )
};


const ComponentTobil = () => {
  return (
    <ScrollView>
    <View>
      <Text>Yuhuuu Mantaff</Text>
      <Text>Hi</Text>
    </View>
  </ScrollView>
  );
}


const Photo = () => {
  return (
    <Image
      source={require("./image-ss/Bracket-pair.png")}
    ></Image>
  );
}

export default App;