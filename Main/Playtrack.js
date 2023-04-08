import React,{useEffect,useLayoutEffect,useState} from 'react'
import{View,StyleSheet, Text,Button ,Slider,Image, ImageBackground} from 'react-native'
import TrackPlayer, { useProgress } from 'react-native-track-player'
import { useSelector,useDispatch } from 'react-redux'
import { songplay,update } from '../Slide'
import Mini from './Mini'
import { usePlaybackState, State } from 'react-native-track-player';
function Playtrack({index}) {
    const {position,duration} = useProgress()
    const dispatch = useDispatch()
    const i = useSelector(state => state.track.Song)
    const [play, setplay] = useState(false)
    const [bt, setbt] = useState('pause')
    const [Song, setSong] = useState([]);
    let track = [];

useEffect(() => {
    
  start()
TrackPlayer.play()
}
,[])

useLayoutEffect(() => {
  
    {isPlaying ? setbt('pause') : setbt('play')}
  
})
const playerState = usePlaybackState();
  const isPlaying = playerState === State.Playing;
const start=async()=>{
    try{
        await TrackPlayer.setupPlayer()
        await TrackPlayer.play()

      }catch(e){}
        const current = await TrackPlayer.getCurrentTrack();
           const song = await TrackPlayer.getTrack(current);
           setSong(song)
            track.push(Song)
            const randomNumber = Math.floor(Math.random() * 100) + 1;

         dispatch(update(randomNumber))
            dispatch(songplay(song))
            
        }

const handplay=()=>{
    console.log(i);
    setplay(!play)


    if(play){
        TrackPlayer.play()
        
      }else{TrackPlayer.pause()}
}

  return (
   <ImageBackground style={styles.main} source={{uri:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'}}>
    <View style={styles.mid}>
        <Image style={styles.image} source={{uri:Song?.artwork}}/>
        <Text style={{fontWeight:'bold',fontSize:20,color:'black'}}>{Song?.title}</Text>
        <Text style={styles.text}>{Song?.artist}</Text>
    <Slider 
    style={styles.slider}
    maximumValue={duration}
    minimumValue={0}
    thumbTintColor={'white'}
    maximumTrackTintColor={'black'}
    minimumTrackTintColor={'white'}
    value={position}
    onValueChange={(e)=>TrackPlayer.seekTo(e)}
    />
    <View style={styles.times}>
    <Text style={styles.text}>{Math.floor(position % 3600 / 60)}:{Math.floor(position % 3600 % 60)}</Text>
    <Text style={styles.text    }>{Math.floor(duration % 3600 / 60)}:{Math.floor(duration % 3600 % 60)}</Text>
    </View>
    
    </View>
   <Button title={bt} onPress={()=>handplay()}/>
   <Button title='previus' onPress={()=>{TrackPlayer.skipToPrevious(),start()}}/>
   <Button title='next' onPress={()=>{TrackPlayer.skipToNext(),start()}}/>
   </ImageBackground>
  )
}

export default Playtrack

const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:'red',
        justifyContent:'center'
    },
    Back:{
        width:'100%',
        height:80,
        // backgroundColor:'white'
    },
    mid:{
        width:'100%',
        height:500,
        // backgroundColor:'yellow',
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        width:350,
        height:400,
        borderRadius:20,
    },
    slider:{
        width:'90%',
        height:30,
    },
    times:{
        width:'90%',
        flexDirection:'row',
        justifyContent:'space-between',
       
    },
    text:{
        color:'white'
    }
})