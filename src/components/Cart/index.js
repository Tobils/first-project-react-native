
import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import cart from '../../assets/icons/cart.png'

export default function Cart(props) {

    return (
        <View style={styles.main}>
            <View style={styles.cartWrapper}>
                <Image
                    style={styles.iconCart}
                    source={cart}
                />
                <Text style={styles.notify}>{props.qty}</Text>
            </View>
            <Text style={styles.text}>Keranjang</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        marginTop: 20, 
        alignItems: 'center'
    },
    iconCart: {
        width: 50,
        height: 50
    },
    cartWrapper: {
        borderWidth: 2,
        borderColor: '#636e72',
        width: 93,
        height: 93,
        borderRadius: 93/2,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    text:{
        fontSize: 14,
        color: '#777777',
        fontWeight:'700',
        marginTop: 18
    },
    notify: {
        fontSize: 12,
        color: 'white',
        backgroundColor: '#00cec9',
        padding: 4,
        borderRadius: 25,
        width: 24,
        height: 24,
        position: 'absolute',
        top: 0,
        right: 0,
        textAlign: 'center'
    }

})
