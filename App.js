import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View , Button } from "react-native";
import * as Location from   "expo-location";
import UnitsPicker from './components/UnitsPicker';
import WeatherInfo from './components/WeatherInfo';
const WEATHER_API_KEY = "4a4b868fe77d5d279e6d0d4ed0f3f7e5"
const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?'

export default function App() {
  const [message  , setErrorMessage] = React.useState(null);
  const [currentWeather ,setcurrentWeather] = React.useState(null);
  const [unit , setUnit] = React.useState("metric");
  
  React.useEffect(()=>{
    load()
  } , [unit])

 
  async function load (){
    try {
      let {status} = await Location.requestPermissionsAsync()
      if( status !== 'granted' ) {
          setErrorMessage("Permission Is Required To Run The App")
          return
      }
      const location = await Location.getCurrentPositionAsync();

      const {latitude , longitude}  = location.coords;

      const weather_url = `${BASE_URL}lat=${latitude}&lon=${longitude}&units=${unit}&appid=${WEATHER_API_KEY}`
      
      const response = await fetch(weather_url)

      const result = await response.json()

      console.log(result)


      if(response.ok){
        setcurrentWeather(result)
      }
      else{
        setErrorMessage(result.message)
      }
      }
    
    catch(error){setErrorMessage(error.message)}
  }

  if(currentWeather !== null){
    
      return (
        <View style={styles.container}>
          <View style = {styles.main}>
            <UnitsPicker unit = {unit} setUnit = {setUnit} />
          <WeatherInfo currentWeather = {currentWeather} />
         <StatusBar style="auto" />
          </View>
          
    
        </View>
      );
  }
  else{
  return (
    <View style={styles.container}>
      
  <Text>{message}</Text>
     <StatusBar style="auto" />
    </View>
  );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent:"center"
  },
  main : {
    flex: 1 , 
    justifyContent : "center"
  }
 
});
