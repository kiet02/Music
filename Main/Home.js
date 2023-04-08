import React, {useState } from 'react'
import {View,StyleSheet, FlatList, Text, Image, TouchableOpacity,ImageBackground } from 'react-native'
import {useSelector,useDispatch} from 'react-redux'
import TrackPlayer from 'react-native-track-player'
import Mini from './Mini'


const Home = ({navigation}) => {
    const list = useSelector(state=>state.track.LIST)
    const i = useSelector(state => state.track.number)
 const dispatch = useDispatch()
    const [Song,setSong] = useState()
    const [modalVisible, setModalVisible] = useState(false);


//    console.log(typeof list);

        const que = async(index)=>{
            
        await TrackPlayer.reset()
        await TrackPlayer.add(list)
        await TrackPlayer.skip(index)
          const quety = await TrackPlayer.getCurrentTrack()
          const song = await TrackPlayer.getTrack(quety)
          setSong(song)
          
        }

 const chosetrack=(item,index)=>{
    return(

<TouchableOpacity onPress={()=>{
que(index)
    setTimeout(() => {
    navigation.navigate("Play")
    setModalVisible(true)
    }, 100);

console.log('====================================');
console.log(list);
console.log('====================================');
  }} >

    <View style={styles.chose}>
        <Image style={styles.image} source={{uri:item.artwork}}/>
        <Text>{item.title}</Text>
        <Text>{item.artist}</Text>
        
    </View>
    </TouchableOpacity>
)}
// console.log(Song.title);

  return (
    <ImageBackground style={styles.main} source={{uri:"data:image/jpeg;base64,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"}}>
        <FlatList
        data={list}
        style={{marginTop:15}}
        keyExtractor={(e)=>e.id}
        renderItem={({item,index})=>chosetrack(item,index)}
        />
      
      {modalVisible ?
<Mini ></Mini>
: null}

    </ImageBackground>
  )
}

export default Home

const styles = StyleSheet.create({
main:{
    flex:1,
    alignItems:'center'
},
chose:{
    width:400,
    height:100,
    backgroundColor:'red',
    marginBottom:10,
    flexDirection:'row',
    borderRadius:10
},
chose1:{
    width:400,
    height:100,
    backgroundColor:'red',
    marginBottom:10,
    flexDirection:'row',
    // justifyContent:'space-evenly',
    borderRadius:15
},

chose2:{
    width:100,
    height:100,
  flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
},
chose3:{
    marginTop:20,
    width:210,
    height:100,
    // backgroundColor:'black'
},
image:{
    width:100,
    height:100,
   
},
tt:{
    width:60,
    height:60
},
tt1:{
    width:70,
    height:70,
    borderRadius:2
},
play:{
    width:40,
    height:40
},



})