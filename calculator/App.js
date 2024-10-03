import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleInput = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleResult = () => {
    try {
      const evalResult = eval(input);
      setResult(evalResult);
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.inputText}>{input}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>

      <View style={styles.buttonContainer}>
        {["1", "2", "3", "+"].map((val) => (
          <TouchableOpacity
            key={val}
            style={[styles.button, val === "+" ? styles.operationButton : styles.numberButton]}
            onPress={() => handleInput(val)}
          >
            <Text style={styles.buttonText}>{val}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.buttonContainer}>
        {["4", "5", "6", "-"].map((val) => (
          <TouchableOpacity
            key={val}
            style={[styles.button, val === "-" ? styles.operationButton : styles.numberButton]}
            onPress={() => handleInput(val)}
          >
            <Text style={styles.buttonText}>{val}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.buttonContainer}>
        {["7", "8", "9", "*"].map((val) => (
          <TouchableOpacity
            key={val}
            style={[styles.button, val === "*" ? styles.operationButton : styles.numberButton]}
            onPress={() => handleInput(val)}
          >
            <Text style={styles.buttonText}>{val}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.buttonContainer}>
        {["C", "0", "=", "/"].map((val) => (
          <TouchableOpacity
            key={val}
            style={[
              styles.button,
              val === "C" || val === "0" ? styles.specialButton : styles.operationButton,
            ]}
            onPress={() => {
              if (val === "C") {
                handleClear();
              } else if (val === "=") {
                handleResult();
              } else {
                handleInput(val);
              }
            }}
          >
            <Text style={styles.buttonText}>{val}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
    justifyContent: "center",
    backgroundColor: "#1C1C1C", // Dark background similar to iPhone's calculator
  },
  resultContainer: {
    backgroundColor: "transparent",
    alignItems: "flex-end",
    padding: 20,
  },
  inputText: {
    fontSize: 36,
    color: "white", // White text for input
  },
  resultText: {
    fontSize: 34,
    color: "white", // Lighter gray for the result
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  button: {
    padding: 20,
    borderRadius: 65, // Rounded button style similar to iPhone
    width: 75,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 30,
    color: "white", // White text for all buttons
  },
  numberButton: {
    backgroundColor: "grey", // Dark gray for number buttons
  },
  operationButton: {
    backgroundColor: "#FF9500", // Vibrant orange for operations like +, -, *, /
  },
  specialButton: {
    backgroundColor: "grey", // Lighter gray for special buttons like C and 0
  },
});
