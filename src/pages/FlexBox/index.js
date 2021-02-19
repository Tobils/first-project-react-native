import React, { Component, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View, Image} from 'react-native';

class FlexBox extends Component {

    /**
     * 1. pertama kali di eksekusi
     * @param {*} props 
     */
    constructor(props){
        super(props);
        this.state = {
            title: 'FlexBox Layouting Item'
        }
        console.log("=====> constructor");
    }

    /**
     * 3. diseksekusi setelah render
     */
    componentDidMount(){
        console.log("=====> did mount");

        setTimeout(()=> {
            this.setState({
                title: "Flexbox"
            })
        }, 2000)
    }

    /**
     * di eksekusi saat terjadi perbuahan state
     */
    componentDidUpdate(){
        console.log("=====> did update");
    }

    /**
     * di eksekusi saat halaman di unmount
     */
    componentWillUnmount(){
        console.log("=====> will unmount");
    }

    /**
     * 2. di eksekusi tepat setelah constructoor
     */
    render(){
        console.log("=====> render");

        return (
            <View>
                <Text style={style.title}>{this.state.title}</Text>
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