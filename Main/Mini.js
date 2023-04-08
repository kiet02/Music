import React,{useState,useEffect} from 'react'
import { TouchableOpacity,Image,View,Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import TrackPlayer from 'react-native-track-player'
import { useSelector } from 'react-redux';
import { usePlaybackState, State } from 'react-native-track-player';
const Mini = () => {

  const navigation = useNavigation();
  const [play, setplay] = useState(true)
  const i = useSelector(state => state.track.Song)
  const [bt, setbt] = useState(require('../Image/play.png'))
  const song = useSelector(state => state.track.Song)
  let title,artist
  let image = "https://tomau.vn/wp-content/uploads/tranh-to-mau-not-nhac-don-gian.jpg"

  const playerState = usePlaybackState();
  const isPlaying = playerState === State.Playing;
  
  useEffect(() => {
    {isPlaying ? setbt(require('../Image/pause.png')) : setbt(require('../Image/play.png'))}
  })
  


  const handplay=()=>{
    setplay(!play)
    if(play){
        TrackPlayer.pause()
      }else{TrackPlayer.play()}
}

 
 try {
  
  title = i.title
  artist = i.artist
  image = i .artwork
 } catch (error) {
 }

  return (
    <TouchableOpacity  style={{flexDirection:'row',marginBottom:20,borderRadius:20,width:"95%",height:100,backgroundColor:'red',alignItems:'center',}}
    onPress={()=>  console.log(song)}
    >
      <Image style={{width:80,height:80,backgroundColor:'white',marginLeft:10,borderRadius:15,marginRight:10}} 
       source={{uri:image}}/>
     <View  style={{}}>
      <Text>{title}</Text>
      <Text>The TrackPlayer is {playerState }</Text>
      <Text>{artist}</Text>
</View>
<TouchableOpacity style={{justifyContent:"center",alignItems:'center',position:'absolute',marginLeft:320}}
onPress={()=>handplay()}
>
<Image style={{width:50,height:50}} source={bt}/>
</TouchableOpacity>
    </TouchableOpacity>
  )
}

export default Mini