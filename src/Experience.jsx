import { View, Text } from '@react-pdf/renderer'
import React from 'react'

const Experience = () => {
  return (
    <View style={{display:"flex", flexDirection:"column"}}>
      <Text>Experience</Text>
      <View style={{display:"flex", flexdirection:"row", marginLeft:"20pt"}}>
        <View>
          <Text>11/21/2022</Text>
        </View>
        <View style={{marginLeft:"20pt", display:"flex", flexDirection:"column"}}>
          <View>
            <Text>Onviro Technology</Text>
          </View>
          <View style={{display:"flex", flexDirection:"column"}}>
            <Text>Junior Developer</Text>
            <Text>Worked on web developement</Text>
            <Text>Got experience in React, Node and MongoDB for web development</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Experience