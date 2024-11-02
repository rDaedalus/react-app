import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Animated, Easing } from 'react-native';

export default function SignUpScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Reference for animation
  const animation = useRef(new Animated.Value(0)).current;

  // Circle wipe transition for Log in
  const handleLoginPress = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 800, // Duration of the animation
      easing: Easing.ease,
      useNativeDriver: false,
    }).start(() => {
      navigation.navigate('LogIn'); // Navigate to LogIn after the animation
    });
  };

  const handleSignUpPress = () => {
    console.log('Sign up button pressed');
    // Add sign-up logic here
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
    transform: [{ scale: animation }],
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/icon.png')} style={styles.icon} />
      </View>

      <Text style={styles.title}>Sign up</Text>

      {/* Sign up form */}
      <View style={styles.form}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={setUsername}
          value={username}
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUpPress}>
        <Text style={styles.signUpButtonText}>Sign up</Text>
      </TouchableOpacity>

      <View style={styles.loginContainer}>
        <Text style={styles.noAccountText}>Already have an account? </Text>
        <TouchableOpacity onPress={handleLoginPress}>
          <Text style={styles.loginText}>Log in</Text>
        </TouchableOpacity>
      </View>

      {/* Animated Circle */}
      <Animated.View style={[styles.circle, circleStyle]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#088395',
    paddingTop: 20, // Add some padding to the top
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  form: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 5,
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
  signUpButton: {
    width: 300,
    height: 40,
    backgroundColor: '#36B5C8',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  signUpButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  noAccountText: {
    color: '#D9D9D9',
    fontSize: 16,
    marginRight: 5,
  },
  loginText: {
    color: '#FFFFFF',
    textDecorationLine: 'underline',
  },
  circle: {
    position: 'absolute',
    backgroundColor: 'lightblue',
    opacity: 0,
  },
});

//ok