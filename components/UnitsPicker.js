import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { Picker } from "@react-native-community/picker";
function UnitsPicker({ unit, setUnit }) {
  return (
    <View style = {styles.unitsPickerStyle}>
      <Picker mode = "dialog" selectedValue={unit} onValueChange={(item) => setUnit(item)}>
        <Picker.Item label="C" value="metric" />
        <Picker.Item label="F" value="imperial" />
      </Picker>
    </View>
  );
}

export default UnitsPicker;

const styles = StyleSheet.create({
    unitsPickerStyle : {
        position : "absolute",
        ...Platform.select({
            ios: {
                top : -30
            },
            android : {
                top :40
            }
        }),
        left : -100 , 
        height :50,
        width: 100
    }

})
