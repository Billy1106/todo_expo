import { Link } from "expo-router"
import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

export default function App() {
  const [text, setText] = React.useState("")
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add To-Do</Text>
      <TextInput 
        style={styles.textInput} 
        value={text} 
        onChangeText={setText} 
        placeholder="Enter your task" 
        placeholderTextColor="#888"
      />
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => console.log("add")} style={styles.addButton}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setText("")} style={styles.resetButton}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  textInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    width: "80%",
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
  },
  addButton: {
    backgroundColor: "#28a745",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  resetButton: {
    backgroundColor: "#dc3545",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
})
