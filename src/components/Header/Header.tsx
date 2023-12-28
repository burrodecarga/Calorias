import { View, Text, StyleSheet, Image, } from 'react-native'
import React from 'react'

const staticInfo = {
    name: 'EDWIN HENRIQUEZ',
    uri: 'https://api.dicebear.com/7.x/lorelei/svg?flip=true',
}
const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Text style={styles.name}>{staticInfo.name}</Text>
                <Text style={styles.title}>Welcome back to your goals</Text>
            </View>
            <View style={styles.rightContainer}>
                <Image style={styles.image} source={{ uri: staticInfo.uri, }} />
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    leftContainer: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',

    },
    rightContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    name: {
        fontSize: 13,
        fontWeight: 'bold',

    },
    title: {
        fontSize: 12,
        color: '#808080',
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 24,
        backgroundColor: 'red',
    },

})
