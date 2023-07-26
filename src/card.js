import React from "react";
import { View,Text, ImageBackground,TouchableOpacity } from "react-native";
import { deviceWidth,deviceheight } from "../android/app/src/dimension";
export default function Cards({name, image, navigation})
{
    return(
        <TouchableOpacity style={{marginHorizontal:10}} onPress={()=> navigation.navigate('Detail',{name})}>
           <ImageBackground
        source={image}
        style={{opacity:0.9,height: deviceheight / 5, width: deviceWidth / 2 - 50}}
        imageStyle={{borderRadius: 30}}
      />
          <View style={{position: 'absolute',height: '100%', width: '100%'}}>
            <Text style={{
            fontSize:18,
            width: '100%',
            height: '100%',
            textAlign: 'center',
            textAlignVertical: 'center',
            color: 'white',
            
          }}>
                {name}
            </Text>
          </View>
        </TouchableOpacity>
    )
}