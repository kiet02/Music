import { View, Text, Button, TextInput, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Test from './Album'
import List from '../Music/List'
import { useDispatch, useSelector } from 'react-redux'
import { track,pust } from '../Slide'
import TrackPlayer from 'react-native-track-player'

const Sreach = ({navigation}) => {
  const [data, setdata] = useState([]);
  const [search,setsearch] = useState([])

  const Handl =(val)=>{
    const sreachData = List.filter((name)=> name.title.toLocaleLowerCase().includes(val))
    setsearch(sreachData)
  }

  return (
    <View style={{backgroundColor:'red',marginTop:10,width:'100%',position:'relative'}}>
      <View>
      <TextInput placeholder='Sreach' style={{ backgroundColor:'blue',borderRadius:100}} 
      onChangeText={(val) => {Handl(val),setdata(val)}}
      ></TextInput>
{data.length > 0 && search.length>0 ? 
<FlatList
data={search}
keyExtractor={(item,index)=>index.toString()}
renderItem ={({item,index})=>{
  return(
    <TouchableOpacity style={{width:'95%',height:50,marginTop:10,backgroundColor:'blue',borderRadius:10,alignSelf:'center'}}>
    <Text>{item.title}</Text>
  </TouchableOpacity>
  )
}}
/>
: null}
      </View>

     
    </View>
  )
}

export default Sreach