import { View, Text } from '@react-pdf/renderer'
import React from 'react'

const Interest = () => {
  return (
    <View style={{display:"flex", flexDirection:"column"}}>
      <Text style={{
        backgroundColor:"#FBEEF8", 
        borderLeft:"6pt", 
        borderLeftColor:'darkblue'
        }}>
          Skill
      </Text>
      <View style={{display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
        <View style={{display:"flex", flexDirection:"column", marginTop:"20pt"}}>
          <View>
            <Text>Javascript</Text>
          </View>
          <View>
            <Text>Javascript</Text>
          </View>
        </View>
        <View style={{display:"flex", flexDirection:"column", marginTop:"20pt"}}>
          <View>
            <Text>Javascript</Text>
          </View>
          <View>
            <Text>Javascript</Text>
          </View>
        </View>      
      </View>

    </View>
  )
}

export default Interest