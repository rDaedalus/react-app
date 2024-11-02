import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";
import Icon from "./assets/icon.png"; // Ensure the path is correct

export default function SplashScreen({ navigation }) { // Accept navigation prop
    const translateYAnim = useRef(new Animated.Value(300)).current;

    useEffect(() => {
        // Run the bounce animation
        Animated.spring(translateYAnim, {
            toValue: 0,
            friction: 5,
            tension: 50,
            useNativeDriver: true,
        }).start();

        // Set a timer to navigate to the Login screen after the animation
        const timer = setTimeout(() => {
            navigation.replace("LogIn"); // Replace so the user can't go back to the splash
        }, 2000); // Adjust time as needed

        return () => clearTimeout(timer); // Clean up the timer when component unmounts
    }, [translateYAnim, navigation]);

    return (
        <View style={styles.container}>
            <Animated.Image 
                source={Icon} 
                style={[styles.image, { transform: [{ translateY: translateYAnim }] }]} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#088395",
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: "cover",
    },
});
