import React, { Component, useState } from 'react'
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native'

const Counter = () => {
    const [number, setNumber] = useState(0)
    return (
        <View>
            <Text style={styles.counterValue}>{number}</Text>
            <Button 
                title="Tambah"
                onPress = {()=> setNumber(number + 1)}
            />
        </View>
    );
}


class CounterClass extends Component {
    state = {
        number: 0
    }
    render() {
        return (
            <View>
                <Text style={styles.counterValue}>{this.state.number}</Text>
                <TouchableOpacity 
                    onPress = {()=> this.setState({number: this.state.number + 1})}
                    style={styles.primaryBtn}>
                    <Text style={styles.appBtn}>Tambah</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress = {()=> this.setState({number: this.state.number - 1})}
                    style={styles.primaryBtn}>
                    <Text style={styles.appBtn}>Kurang</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


export default class index extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <Counter/>
                <CounterClass/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        marginVertical: 20
    },
    primaryBtn: {
        marginVertical: 5,
        borderRadius: 10,
        elevation: 8,
        backgroundColor: '#0984e3',
        padding: 8
    },
    counterValue: {
        textAlign: 'center',
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 10
    },
    appBtn: {
        fontSize: 15,
        color: '#ffff',
        fontWeight: '300',
        alignSelf: 'center',
        textTransform: 'uppercase'
    }
})
