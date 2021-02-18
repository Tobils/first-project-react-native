import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View, Image} from 'react-native';

class FlexBox extends Component {
    render(){
        return (
            <View>
                <Text style={style.title}>FlexBox Layouting Item</Text>
                <View style={style.orientation}>
                    <View style={{ backgroundColor: '#fd79a8', width: 50, height: 50 }}></View>
                    <View style={{ backgroundColor: '#6c5ce7', width: 50, height: 50 }}></View>
                    <View style={{ backgroundColor: '#636e72', width: 50, height: 80 }}></View>
                    <View style={{ backgroundColor: '#b2bec3', width: 50, height: 150 }}></View>
                    <View style={{ backgroundColor: '#2d3436', width: 50, height: 50 }}></View>
                    <View style={{ backgroundColor: '#e84393', width: 50, height: 50 }}></View>
                </View>
            </View>
        );
    }

    
}

const style = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 16
    },
    orientation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20
    }
})

export default FlexBox;