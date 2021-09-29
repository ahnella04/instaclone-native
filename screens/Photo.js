import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Photo({ navigation }) {
    return (
        <View 
            style={{ 
                backgroundColor: "black", 
                flex: 1, 
                alignItems: "center", 
                justifyContent: "center" 
            }}>
                <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                    <Text style={{ color: "white" }}>Profile</Text>
                </TouchableOpacity>
        </View>
    )
}