import React from 'react'
import { View, Text } from '@react-pdf/renderer'
const Introduction = () => {
  return (
    <View style={{
      position:"relative",
      backgroundColor:"white", 
      borderLeft:"12pt", 
      borderLeftColor:"darkblue", 
      padding:"20pt"
      }}>
      <Text >
        I am self-learned Full stack web developer. I created a crave for programming for 3 years and since then
        I am practicing to code. As a programmer, I would like to create a automated, beautiful world and informational world width
        with my knowledge of coding and web-development.
      </Text>
    </View>
  )
}

export default Introduction