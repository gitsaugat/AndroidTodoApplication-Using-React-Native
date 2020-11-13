import React from 'react'
import {StyleSheet ,  View , Text , Image} from 'react-native';
export default function WeatherInfo({currentWeather}){
    const {main : {temp} , weather : [details] , name}  = currentWeather;
    const {icon} = details
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;
    return (
        <View style = {styles.container}>
            <Text>{name}</Text>
            <Image style = {styles.ImageStyle} source ={{uri: iconUrl}}/>
            <Text>{temp}</Text>
            
        </View>
    )
}

const styles  = StyleSheet.create({
    container : {
        alignItems:'center'
    },
    ImageStyle : {
        width:100 , 
        height:100
    }
})


