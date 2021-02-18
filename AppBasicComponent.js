import React, { Component } from 'react';
import {Image, ScrollView, Text, TextInput, View} from 'react-native'


class BasicApp extends Component {
    render(){
        return (
            <View>
                <View
                style={{width:80, height: 80, backgroundColor: '#81ecec'}}
                ></View>
                <ComponentTobil></ComponentTobil>
                <Photo></Photo>
                <TextInput style={{borderWidth: 1}}>

                </TextInput>
            </View>
        );
    }
}


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

export default BasicApp;