import React from 'react'
import { Image, StyleSheet } from 'react-native' // ımage kullanmak ve style için import yapıyoruz.

// imagemizi dosya dizininden çekip geri dönderdiğimiz fonksiyon
export default function Logo() {
    return <Image source={require('../image/logo.png')} style={styles.image} /> 
}

const styles = StyleSheet.create({
    image: {
      width: 250,
      height: 250,
      marginBottom : 10,
      marginLeft: "auto",
      marginRight: "auto"
    },
  })