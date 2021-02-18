import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native'
import {BasicApp} from './AppBasicComponent'
import jam from './image-ss/image-watch.jpg'

const App = () => {
  return (
    <View style={{ margin: 20 }}>
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
    </View>

  )
};


const ProductComponent = () => {
  return(
    <View style={style.card}>
      <Image
        style={style.productImage}
        source={ jam }
      ></Image>
      <Text style={style.title}>
        New Smart Watch
      </Text>
      <Text style={style.price}>Rp. 6.000.000</Text>
      <Text style={style.address}>Jakarta Barat</Text>
      <View style={style.btnCard}>
        <Text style={style.btnText}>Beli</Text>
      </View>
    </View>
  );
}



const style = StyleSheet.create({

    card: {
      width: 212,
      borderRadius: 8,
      backgroundColor: '#dfe4ea',
      padding: 12,
      alignContent: 'center',
      margin: 5
    },
    productImage: {
      height: 107,
      width: 188,
      borderRadius: 8,
      alignContent:'center'
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 16
    },
    price: {
      fontSize:  14,
      color:'#ffa502',
      marginTop: 16,
      fontWeight: 'bold'
    },
    address:{
      fontSize: 16,
      fontWeight:'bold',
      marginTop: 12
    },
    btnCard: {
      backgroundColor: '#70a1ff',
      paddingVertical: 6,
      borderRadius: 25,
      marginTop: 20
    },
    btnText: {
      fontSize: 16,
      textAlign: 'center',
      color: 'white',
      fontWeight: '600'
    }
});


const SampleComponent = () => {
  return (
    <View style={{ margin: 10 }}>
      <View
      style={{
        width:80, 
        height: 80,
        backgroundColor: '#81ecec',
        marginTop: 20
      }}
      ></View>
      <ComponentTobil></ComponentTobil>
      <Photo></Photo>
      <TextInput style={{borderWidth: 1}}>

      </TextInput>

      <BoxGreen></BoxGreen>
      <Profile></Profile>

    </View>
  );
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

class BoxGreen extends Component {
  render(){
    return (
      <View>
        <Text>
          Box Green
        </Text>
      </View>
    );
  }
}


class Profile extends Component {
  render(){
    return(
        <View>
          <Image
            source={require("./image-ss/Bracket-pair.png")}
            style={{width:100, height:100,borderRadius:50, marginLeft:10}}
          ></Image>
          <Text>
            bracket pair extension
          </Text>
        </View>
    );
  }
}

export default App;