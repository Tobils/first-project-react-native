import React, { Component } from "react";
import {Image, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native'
import profile from '../../assets/images/profile.jpeg';


class ProfileList extends Component{
    render(){
        return(
            <View>

                <View style={style.profileCard}>
                    <Image 
                        style={style.profileImage}
                        source={profile}
                    ></Image>
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>ADE SUHADA</Text>
                        <Text>Software Engineer</Text>
                    </View>
                </View>
            </View>
        );
    } 

}



const style = StyleSheet.create({
    profileCard: {
        marginTop: 20,
        marginHorizontal: 10,
        backgroundColor: '#dfe4ea',
        alignItems: 'center',
        borderRadius: 8,
        padding: 12,
        flexDirection: 'row'
    },
    profileImage: {
        borderRadius: 50,
        marginRight: 20
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 16
    }
})

export default ProfileList;