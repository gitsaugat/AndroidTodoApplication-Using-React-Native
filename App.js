import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import Todo from "./Todo";
export default function App() {
  const [todos, setTodos] = useState([
    {
      todo: "wash dishes",
      id: 200,
    },
    {
      todo: "wash clothes",
      id: 201,
    },
    {
      todo: "HomeWork",
      id: 202,
    },
    {
      todo: "Clean Room",
      id: 203,
    },
    {
      todo: "Clean Washroom",
      id: 204,
    },
  ]);
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.navbartext}>Welcome to Saugat's Todo</Text>
      </View>
      <View style={{ paddingTop: 5, paddingBottom: 5 }}>
        <TextInput
          value={text}
          style={{
            borderWidth: 1,
            borderColor: "black",
            borderRadius: 12,
            width: 380,
            padding: 10,
          }}
          onChangeText={(val) => setText(val)}
        />
      </View>
      <View style={{ paddingTop: 2, width: 300 }}>
        <Button
          onPress={() => setTodos((prevState) => [...prevState, text])}
          color="coral"
          title="ADD TODO"
        />
      </View>
      <Todo todos={todos} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 30,
  },
  input: {
    backgroundColor: "gray",
    width: 400,
  },
  navbar: {
    backgroundColor: "coral",
    width: 400,
    height: 50,
    textAlign: "center",
  },
  navbartext: {
    paddingTop: 10,
    textAlign: "center",
    fontSize: 20,
  },
});
