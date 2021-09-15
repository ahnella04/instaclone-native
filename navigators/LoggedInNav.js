import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View } from "react-native";
import TabIcon from "../components/nav/TabIcon";
import StackNavFactory from "../components/nav/StackNavFactory";

const Tabs = createBottomTabNavigator();


export default function LoggedInNav() {
    return (
        <Tabs.Navigator
            screenOptions={{
                tabBarActiveTintColor: "white",
                showLabel: false,
                tabBarStyle: {
                    borderTopColor: "rgba(255, 255, 255, 0.3)",
                    backgroundColor: "black"
                }
            }}
        >
            <Tabs.Screen 
                name="NFeed"
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <TabIcon iconName={"home"} color={color} focused={focused} />
                    ),
                    headerShown: false
                }} 
            >
                {() => <StackNavFactory screenName="Feed" />}
            </Tabs.Screen>
            <Tabs.Screen 
                name="NSearch"
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <TabIcon iconName={"search"} color={color} focused={focused} />
                    ),
                    headerShown: false
                }}     
            >
                {() => <StackNavFactory screenName="Search" />}
            </Tabs.Screen>
            <Tabs.Screen 
                name="Camera" 
                component={View} 
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <TabIcon iconName={"camera"} color={color} focused={focused} />
                    )
                }}  
            />
            <Tabs.Screen 
                name="NNotifications" 
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <TabIcon iconName={"heart"} color={color} focused={focused} />
                    ),
                    headerShown: false
                }}     
            >
                {() => <StackNavFactory screenName="Notifications" />}
            </Tabs.Screen>
            <Tabs.Screen 
                name="NMe"
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <TabIcon iconName={"person"} color={color} focused={focused} />
                    ),
                    headerShown: false
                }}
            >
                {() => <StackNavFactory screenName="Me" />}

            </Tabs.Screen>
        </Tabs.Navigator>
    )
}