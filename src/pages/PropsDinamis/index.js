
import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, ScrollView } from 'react-native'
import profile1 from '../../assets/images/profile-1.jpeg'
import profile2 from '../../assets/images/profile-2.jpeg'

const Story = (props) => {
    return(
        <View style={{alignItems:'center', marginRight: 20}}>
            <Image
                style={styles.image}
                source={props.gambar}
            />
            <Text style={{maxWidth: 80, textAlign:'center'}} >{props.judul}</Text>
        </View>
    );
}


export default class index extends Component {
    render() {
        return (
            <ScrollView horizontal>
                <View style={styles.wrapper}>
                    <Story judul="Profile channel 1" gambar={profile1}/>
                    <Story judul="Profile kanal 2" gambar={profile2}/>
                    <Story judul="Profile c 3" gambar={profile1}/>
                    <Story judul="Profile baru 4" gambar={profile2}/>
                    <Story judul="Profile c 3" gambar={profile1}/>
                    <Story judul="Profile baru 4" gambar={profile2}/>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    image:{
        width: 80,
        height: 80,
        borderRadius: 80/2
    },
    wrapper: {
        marginVertical: 20,
        flexDirection: 'row'
    }
})
