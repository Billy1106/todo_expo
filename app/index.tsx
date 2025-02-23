import useTodoStore from "../store/todos";

import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function App() {
  const [text, setText] = React.useState("");
  const { todos, addTodo, removeTodo } = useTodoStore();
  useEffect(() => {}, []);

  const handleAddTodo = () => {
    if (text.trim() === "") {
      return;
    }
    addTodo(text);
    setText("");
  };

  const handleRemoveTodo = (id: string) => {
    removeTodo(id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-Do List</Text>
      <TextInput
        style={styles.textInput}
        value={text}
        onChangeText={setText}
        placeholder="Enter your task"
        placeholderTextColor="#888"
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleAddTodo} style={styles.addButton}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.todoWrapper}>
        {todos.map((example) => (
          <View key={example.id} style={styles.todoListItem}>
            <Text style={styles.todoText}>{example.text}</Text>
            <TouchableOpacity
              style={styles.todoButton}
              onPress={() => handleRemoveTodo(example.id)}
            >
              <AntDesign name="delete" size={24} />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
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
  todoWrapper: {
    width: "80%",
    marginTop: 20,
    height: "50%",
    overflow: "scroll",
  },
  todoListItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  todoText: {
    fontSize: 16,
  },
  todoButton: {
    padding: 5,
    borderRadius: 5,
  },
});
