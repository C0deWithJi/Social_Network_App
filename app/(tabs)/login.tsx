import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import styles from '../constants/styles.js';

const login = () => {
  const router = useRouter();


  return (
    <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "teal",
      }}>
        <Text style={{ padding: 20, fontSize: 24, color: 'white', fontWeight: 'bold' }}
        >
          Welcome to Back!
        </Text>
        <TextInput style={styles.input} placeholder="Username" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
        <Button
          title="Login"
          color="indigo"
          onPress={() => console.log("Login button pressed")}
        />
    </View>
  );
};

export default login