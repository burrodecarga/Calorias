import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import { Button, } from '@rneui/themed'
import { useNavigation, } from '@react-navigation/native'
import { StackNavigationProp, } from '@react-navigation/stack'

const Calorias = () => {

    const { navigate, } = useNavigation<StackNavigationProp<RootStackParamsList, 'Home'>>()
    const handlerAddPress = () => {
        navigate('AddFood')
    }
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Text style={styles.name}>Calorias</Text>
            </View>
            <View style={styles.rightContainer}>
                <Button
                    size='sm'
                    radius='md'
                    color='primary'
                    onPress={handlerAddPress}
                >
                    (+)
                </Button>
            </View>
        </View>
    )
}

export default Calorias

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
        marginVertical: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    name: {
        fontSize: 14,
        fontWeight: 'bold',

    },
    title: {
        fontSize: 16,
        color: '#808080',
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 24,
        backgroundColor: 'red',
    },

})


