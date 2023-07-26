import React, { useEffect, useState } from 'react'
import { Text,View ,ImageBackground,Image,TouchableOpacity} from 'react-native'
import { deviceWidth,deviceheight } from "../android/app/src/dimension";
import Icon from 'react-native-vector-icons/Ionicons';
import { API_KEY } from './Constants';
import { color } from 'react-native-reanimated';
export default function Details1(props) {
    const [Data,setData]=useState('');
    const {name} =props.route.params;
    const pressHandler = () => {
      props.navigation.goBack()
    }  
    useEffect(() => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`,
      )
        .then(res => res.json())
        .then(res => setData(res))
        .catch(err => console.log(err));
    }, []);  
    console.log(Data)
  return (
    <View>
         <View>
               <ImageBackground source={require('..//assets/images/bg2.jpg')} style={{height:
               deviceheight,width:deviceWidth}} imageStyle={{
                opacity:0.6,backgroundColor:"black"
               }}
               />
       <View style={{position:'absolute'}}>
       <View style={{paddingVertical:10,paddingHorizontal:10,flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:deviceWidth}}>
       <TouchableOpacity onPress={pressHandler}>
              <Icon name='menu' size={22} color="white" />
            </TouchableOpacity>
            <Image source={require('..//assets/images/user.jpg')} style={{height:46,width:46,borderRadius:50}}/>
        </View>
        {
          Data ? <View 
          style={{
          flexDirection:'column',
          justifyContent:'center', 
          height: deviceheight-100
          }}>
            
          <Text style={{color:'white',
          fontSize:40,
          marginLeft:80
          }}>{name}</Text>

        <Text style={{
          fontSize: 22, 
          color: 'white',
           textAlign:"center"}}>
           {Data['weather'][0]['main']}
              </Text>
              
            <Text style={{fontSize: 22, color: 'white', textAlign:"center"}}>{(Data['main']['temp']-273).toFixed(2)}&deg;C</Text>
            <Text style={{fontSize:20,color:'white',textAlign:'center'}}>Weather Details</Text>
          <View >
            <Text style={{color:'white',textAlign:'center',fontSize:20}}>Wind </Text>
            <Text style={{color:'white',textAlign:'center',fontSize:20}}>{Data['wind']['speed']}</Text>
            
            </View>
          
          </View>:null
        }
        </View>
        </View>
        </View>
  )
}
