import React, { Component, useState } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Cart from '../../components/Cart'
import Product from '../../components/Product'

export default class index extends Component {
    state = {
        qty: 0
    }
    render() {
        return (
            <View style={styles.wrapper}>
                <Product onBtnPress={() => this.setState({qty: this.state.qty + 1})}/>
                <Cart qty={this.state.qty}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    }
})
