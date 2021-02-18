import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View, Image} from 'react-native';
import ProfileComponent from './ProfileComponent'

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
                <Text style={style.title}>FlexBox Layouting Profile</Text>
                <ProfileComponent></ProfileComponent>
                <ProfileComponent></ProfileComponent>
                <ProfileComponent></ProfileComponent>
                <ProfileComponent></ProfileComponent>
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
        alignItems:'flex-end',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})

export default FlexBox;