import React from "react";
import { StyleSheet, SafeAreaView, StatusBar, View, Text, ScrollView } from "react-native";
import { Icon } from "react-native-vector-icons/MaterialIcons";

const HomeScreen = ({navigation}) => {
    return (
    <SafeAreaView style={styles.container}>
        <StatusBar translucent={false} backgroundColor={'#04555c'} />
        <View style={styles.header}>
            <Icon name="sort" size={28} color={"#FFF"}/>
            <Icon name="notifications-none" size={28} color={"#FFF"}/>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{backgroundColor: '#04555c', height: 120, paddingHorizontal:20,}}>
                <Text style={styles.headerTitle}> Explore the</Text>
            </View>
        </ScrollView>
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    header: {
        paddingVertical: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: '#04555c',
    },
    headerTitle: {
        color: '#FFF',
        fontWeight: "bold",
        fontSize: 23,
    }
});

export default HomeScreen;
