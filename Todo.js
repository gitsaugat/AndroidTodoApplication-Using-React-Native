import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollViewComponent,
} from "react-native";

export default function Todo(props) {
  return (
    <View style={styles.todoview}>
      {props.todos.map(({ todo, id }) => (
        <TouchableOpacity>
          <Text
            style={{
              color: "black",
              paddingTop: 5,
              alignItems: "center",
              fontSize: 20,
              borderColor: "gray",
              borderStyle: "dashed",
              borderWidth: 1,
              width: 300,
              height: 40,
              textAlign: "center",
              margin: 12,
            }}
            key={id}
          >
            {todo}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  todoview: {
    fontSize: 12,
    paddingTop: 15,
  },
});
