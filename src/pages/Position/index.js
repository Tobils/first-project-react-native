import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import cart from '../../assets/icons/cart.png'

export default function Position() {
    return (
        <View>
            <Text style={styles.title}>FlexBox Position Item</Text>

            <View style={styles.main}>
                <View style={styles.cartWrapper}>
                    <Image
                        style={styles.iconCart}
                        source={cart}
                    />
                    <Text style={styles.notify}>10</Text>
                </View>
                <Text style={styles.text}>Keranjang Belanja Anda</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        marginTop: 20, 
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 16
    },
    iconCart: {
        width: 50,
        height: 50
    },
    cartWrapper: {
        borderWidth: 1,
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
        right: 0
    }
})
