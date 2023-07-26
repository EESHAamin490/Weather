import React from "react";
import { StyleSheet,View,Text, Button,Image } from "react-native";
export default function weather({route,navigation})
{
    const {name}=route.params;

 const PRESSHOLDER = () => {
    navigation.goBack()
}
    return(
       <View>
<Text>{JSON.stringify(name)}</Text>
<Button title='Volver' onPress={PRESSHOLDER}/>
</View>
    );
}