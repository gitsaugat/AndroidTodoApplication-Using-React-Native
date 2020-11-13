import React from 'react'
import {Platform, View , StyleSheet , TouchableOpacity} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {colors} from '../utils/index';
import {Button} from "react-native";

const { PRIMARY_COLOR }  =colors

function Reload({load}) {
    const reloadIconName = Platform.OS === "ios" ? "iso-refresh" : "md-refresh"
    return (
        <View style = {styles.reloadIcon}>
         <TouchableOpacity>
            <Ionicons onPress = {load}  name = {reloadIconName} size = {24} color = {PRIMARY_COLOR}/>
        </TouchableOpacity>
        </View>
    )
}

export default Reload

const styles = StyleSheet.create({
    reloadIcon : {
        position : 'absolute',
        top : 50 , 
        right : -100
    }
})
