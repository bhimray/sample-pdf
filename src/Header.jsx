import React from 'react'
import { View, Text, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
    headWrapper:{
        display: 'flex',
        flexDirection:"row",
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        paddingBottom: '12pt',
        gap:"5pt",
        height:"50pt",
        width:"100vw",
        backgroundColor:"#FBEEF8"
    },
    headBlurSize: {
        width: '51rem',
        height: '50rem'
    },
    name:{
        color:"darkblue",
        fontSize:"12pt",
        borderBottom:"6pt",
        borderBottomColor:"orange",
        borderBottomStyle:"solid"
    }
    
  })

const Header = () => {
  return (
    <View style={{
    display:"flex",
    position:"relative",
    flexDirection:"row", 
    justifyContent:"space-around", 
    backgroundColor:"#FBEEF8",
    padding:"20pt",
  }}
    >
      <View style={{display:"flex", flexDirection:"column"}}>
        <Text style={{fontSize:"25pt"}}>Bimlendra Ray</Text>
        <Text style={styles.name}>Frontend Web Developer</Text>
      </View>
      <View style={{display:"flex", flexDirection:"column"}}>
        <Text style={styles.name}>9864016596</Text>
        <Text style={styles.name}>raybimlendra@gmail.com</Text>
        <Text style={styles.name}>Sarlahi, Madhesh, Nepal</Text>
      </View>
    </View>
  )
}

export default Header