import { Text, View, ImageBackground,Image,TextInput ,FlatList,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { deviceWidth,deviceheight } from '../android/app/src/dimension';
import Cards from './card';

export default function Home(props)  {
  const [city, setcity]=useState('');
  const cities=[{
    name:'Islamabad',
    image:require('../assets/images/Islamabad.jpg')
  },
  {
    name:'Peshawar',
    image:require('../assets/images/Faislabad.jpg')
  },
  {
    name:'Gujranwala',
    image:require('../assets/images/Gujranwala.jpg')
  },
  {
    name:'Islamabad',
    image:require('../assets/images/lahore.jpg')
  },
  {
    name:'Quetta',
    image:require('../assets/images/Quetta.jpg')
  }
]
    return (
        <View>
               <ImageBackground source={require('..//assets/images/Background.jpg')} style={{height:
               deviceheight,width:deviceWidth}} imageStyle={{
                opacity:0.6,backgroundColor:"black"
               }}
               />
       <View style={{position:'absolute'}}>
       <View style={{paddingVertical:10,paddingHorizontal:10,flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:deviceWidth}}>
            <TouchableOpacity>
            <Icon name='menu' size={46} color='white' />
            </TouchableOpacity>
            <Image source={require('..//assets/images/user.jpg')} style={{height:46,width:46,borderRadius:50}}/>
        </View>
      

       <View style={{paddingHorizontal: 30, marginTop: 80}}>
          <Text style={{fontSize: 40, color: 'white'}}>Islamabad  19C</Text>
          <Text style={{color: 'white', fontSize: 22, fontWeight: 'bold'}}>
            Search the city by the name
          </Text>  
          <View style={{
             flexDirection: 'row',
             justifyContent: 'space-between',
             alignItems: 'center',
             borderRadius: 50,
             borderWidth: 1,
             borderColor: 'white',
             marginTop: 16,
             paddingHorizontal: 10,
          }}>      
            <TextInput 
          value={city}
          onChangeText={val => setcity(val)}
          placeholder="Search City"
          placeholderTextColor="white"
          style={{paddingHorizontal: 10, color: 'white', fontSize: 16}}/>
           <TouchableOpacity onPress={() => props.navigation.navigate('Detail', {name: city})}>
              <Icon name="search" size={22} color="white" />
            </TouchableOpacity>
          </View>
          <View >
            <Text style ={{color:"white",fontSize:35,paddingHorizontal:10,marginTop:100,marginBottom:20,fontWeight:'bold'}}>My Location</Text>
            <View>
            <FlatList 
            horizontal
            data={cities} renderItem={({item})=>(
             //<Text>{item.name}</Text>   
             <Cards name={item.name} image={item.image} navigation={props.navigation}/>
            )
            }
            />
            </View>
          </View>
          </View>
        </View>  
        </View>       
    );
}