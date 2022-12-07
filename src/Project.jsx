import { View, Text, Image } from '@react-pdf/renderer'
import React from 'react'

const Project = () => {

  return (
    <View style={{display:"flex", flexDirection:"column"}}>
      <Text>Project</Text>
      <View style={{display:"flex", flexdirection:"row", marginLeft:"20pt"}}>
        <View>
          <Text>11/21/2022</Text>
        </View>
        <View style={{marginLeft:"20pt", display:"flex", flexDirection:"column"}}>
          <View>
            <Text>MyOG project which will provide online service to the public</Text>
          </View>
          <View style={{display:"flex", flexDirection:"column"}}>
            <Text>Self project</Text>
            <Text>This project is made with React, GraphQL, Nodejs and MongoDB</Text>
            <Text>This project include high complexity of the task in very efficient way</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Project