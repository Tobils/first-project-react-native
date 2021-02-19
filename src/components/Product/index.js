
import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import jam from '../../assets/images/image-watch.jpg'


export default function Product(props) {
    return (
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
        <TouchableOpacity 
            style={style.btnCard}
            onPress={props.onBtnPress}
        >
          <Text style={style.btnText}>Beli</Text>
        </TouchableOpacity>
    </View>
    )
}

const style = StyleSheet.create({
    card: {
        width: 212,
        borderRadius: 8,
        backgroundColor: '#dfe4ea',
        padding: 12,
        alignContent: 'center',
        margin: 15
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
        marginTop: 12,
        fontWeight: 'bold'
      },
      address:{
        fontSize: 16,
        fontWeight:'bold',
        marginTop: 5
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
})
