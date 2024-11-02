import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Animated, Easing } from 'react-native';
import Icon from './assets/icon.png'; // Ensure this path is correct

export default function LogInScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Reference for animation
  const animation = useRef(new Animated.Value(0)).current;

  // Circle wipe transition for Sign up
  const handleSignUpPress = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 800, // Duration of the animation
      easing: Easing.ease,
      useNativeDriver: false,
    }).start(() => {
      navigation.navigate('SignUp'); // Navigate to SignUp after the animation
      animation.setValue(0); // Reset animation value for next use
    });
  };

  const handleLoginPress = () => {
    console.log('Login button pressed');
    // Add login logic here
  };

  // Style for the circle animation
  const circleStyle = {
    width: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [50, 1500], // Start small and expand to cover screen
    }),
    height: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [50, 1500],
    }),
    borderRadius: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [25, 750], // Make the circle
    }),
    opacity: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1], // Fade in as the circle expands
    }),
    position: 'absolute',
    backgroundColor: 'lightblue',
    top: '50%',
    left: '50%',
    transform: [
      {
        translateX: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [-25, -750], // Negative half of the final width
        }),
      },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [-25, -750], // Negative half of the final height
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Image source={Icon} style={styles.icon} />
      <View style={styles.loginSection}>
        <Text style={styles.loginText}>Log in</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={setUsername}
          value={username}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
        <Text style={styles.loginButtonText}>Log in</Text>
      </TouchableOpacity>
      <View style={styles.signupContainer}>
        <Text style={styles.noAccountText}>Don't have an account? </Text>
        <TouchableOpacity onPress={handleSignUpPress}>
          <Text style={styles.signupText}>Sign up</Text>
        </TouchableOpacity>
      </View>

      <Animated.View style={circleStyle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#088395',
  },
  icon: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: 180,
  },
  loginSection: {
    marginBottom: 10,
  },
  loginText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 220,
    marginBottom: 12,
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
  },
  input: {
    width: 300,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  loginButton: {
    width: 300,
    height: 40,
    backgroundColor: '#36B5C8',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  loginButtonText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  noAccountText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  signupText: {
    fontSize: 16,
    color: '#36B5C8',
  },
});