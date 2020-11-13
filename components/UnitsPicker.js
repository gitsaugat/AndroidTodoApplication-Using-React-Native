import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-community/picker";
function UnitsPicker({ unit, setUnit }) {
  return (
    <View>
      <Picker mode = "dialog" selectedValue={unit} onValueChange={(item) => setUnit(item)}>

        <Picker.Item label="C" value="metric" />
        <Picker.Item label="F" value="imperial" />
      </Picker>
    </View>
  );
}

export default UnitsPicker;
