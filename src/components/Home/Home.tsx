import { StyleSheet, View, } from 'react-native'
import React from 'react'
import Header from '@components/Header'
import Calorias from '@components/Calorias'

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Calorias />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#fff',
  },
})
