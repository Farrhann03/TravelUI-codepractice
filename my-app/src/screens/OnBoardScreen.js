import { StatusBar } from "expo-status-bar";
import React from "react";
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import onboard1 from "../assets/onboard1.jpeg";

const OnBoardScreen = ({navigation}) => {
    return (
    <View style={styles.container}>
        <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
        <ImageBackground style={styles.image1} source={onboard1}></ImageBackground>
        <View style={styles.details}>
            <Text style={styles.textHeader}>Discover</Text>
            <Text style={styles.textHeader}>world with us</Text>
            <Text style={styles.textSubHeader}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut
            sem non erat vehicula dignissim. Morbi eget congue ante, feugiat.</Text>
            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('HomeScreen')}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Get Started</Text>
            </View>
            </TouchableOpacity>
        </View>
    </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image1: {
        flex: 1,
    },
    details:{
        height: '50%',
        bottom: 0,
        position: "absolute",
        paddingHorizontal: 40,
    },
    textHeader: {
        color: '#FFF',
        fontSize: 35,
        fontWeight: "bold",
    },
    textSubHeader: {
        color: '#FFF',
        lineHeight: 25,
        marginTop: 15,
    },
    button: {
        height: 50,
        width: 120,
        backgroundColor: "#FFF",
        marginTop: 20,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        fontWeight: "bold",
    }

});

export default OnBoardScreen;