import { View, Text,FlatList,Pressable,Button,Modal,StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import React,{useState,useEffect} from 'react'
import List from '../Music/List'
import { useNavigation } from '@react-navigation/native';
import {pust} from '../Slide'
import { useDispatch} from 'react-redux';
const Album = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [DATA,setDATA] = useState([])
  const [Album,setAlbum] = useState([])
  let album = []

  useEffect(()=>{
    
    const geturl = async ()=>{
   
           for( key in List){      
               if (!album.includes(List[key].album)) {
                   album.push(List[key].album)
                }  
           }
          setAlbum([...new Set(album)])
    }
    geturl()
  },[])

        const onpress = (index)=>{
          let track = []
        for(key in List){
          if(List[key].album == Album[index]){
          track.push(List[key])
          }
        }
          dispatch(pust(track))
        setTimeout(() => {
          navigation.navigate('Home')
        }, 100);

        }


  return (
    <ImageBackground style={styles.centeredView} source={{uri:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'}}>
     
      <FlatList
      data={Album}
      keyExtractor={(item,index) => index }
      renderItem ={({item,index}) => {
        return(
      <TouchableOpacity style ={{width:400,
          height:100,
          backgroundColor:'red',
          marginBottom:10,
          flexDirection:'row',
          borderRadius:10,
          marginLeft:5,
          marginTop:10,
          justifyContent:'center'}}
          onPress={()=>onpress(index)}
      >
      <Text style={{fontSize:20,fontWeight:"bold",alignSelf:'center'}}>{item}</Text>
 </TouchableOpacity>
      )}}
      />
      
      </ImageBackground>
  )
}

export default Album
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
 
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
})