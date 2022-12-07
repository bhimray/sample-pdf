import { View, Text } from '@react-pdf/renderer'
import React from 'react'

const Certification = () => {
  return (
    <View style={{display:"flex", flexDirection:"column"}}>
      <Text>Certification</Text>
      <View style={{display:"flex", flexDirection:"row", justifyContent:"flex-start", marginLeft:"20pt"}}>
        <View>
          <Text>2/11/2021</Text>
        </View>
        <View style={{display:"flex", flexDirection:"column", marginLeft:"20pt"}}>
          <Text>Introduction to the Data Science</Text>
          <Text>Michigan University</Text>
          <View style={{display:"flex", flexDirection:"column"}}>
            <Text>Learned fundamental of data cleaning</Text>
            <Text>Performed data merging and table creation</Text>
            <Text>Completed 3 project to clean and wrangle the data</Text> 
          </View>
        </View>
      </View>
    </View>
  )
}

export default Certification