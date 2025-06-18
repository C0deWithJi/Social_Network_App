import React, { useState }from 'react'
import { Text, TextInput, View, TouchableOpacity } from 'react-native'
import styles from '../constants/styles';
import { Button } from '@react-navigation/elements';
// This is the register page for the NTWRTH app
// It allows users to sign up for an account
// It is a simple form with a username and password field
const register = () => {
  const [selectedRole, setSelectedRole] = useState('user');
  const roles = [
    "Entrepreneur",
    "Employee",
    "Investor",
    "Mentor",
  ]
  const [name, setName] = useState(String);
  const [email, setEmail] = useState(String);
  const [username, setUsername] = useState(String);
  const [password, setPassword] = useState(String);
  const [confirmPassword, setConfirmPassword] = useState(String);

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!name || !email || !username || !password) {
      alert("Please fill in all fields!");
      return;
    }
    alert('Registration successful!');
    };

  return (
    <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "teal",
      }}>
        <Text style={{ fontSize: 24, color: "white", fontWeight: 'bold', marginBottom: 20 }}
        >
          Welcome to the NTWRTH!
        </Text>
        <TextInput style={styles.input} placeholder='Full Name'></TextInput>
        <TextInput style={styles.input} placeholder='Email Address'></TextInput>
        <TextInput style={styles.input} placeholder='Username'></TextInput>
        <TextInput style={styles.input} placeholder='Password' secureTextEntry={true}></TextInput>
        <TextInput style={styles.input} placeholder='Confirm Password' secureTextEntry={true}></TextInput>

        <Text style={{ color: 'white', marginTop: 20 }}>Select your role:</Text>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          {roles.map((role) => (
            <TouchableOpacity
              key={role}
              onPress={() => setSelectedRole(role)}
              style={{
                backgroundColor: selectedRole === role ? 'indigo' : 'lightgray',
                padding: 10,
                borderRadius: 5,
                marginHorizontal: 5
              }}
            >
              <Text style={{ color: selectedRole === role ? 'white' : 'black' }}>{role}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <Button
          style={styles.button}
          variant="filled"
          color="indigo"
          onPress={() => alert('Registration successful!')}
        >
          Register
        </Button>

        
    </View>
  );
}

export default register