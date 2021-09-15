import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Photo from "../../screens/Photo";
import Profile from "../../screens/Profile";
import Feed from "../../screens/Feed";
import Search from "../../screens/Search";
import Notifications from "../../screens/Notifications";
import Me from "../../screens/Me";
import { Image } from "react-native";

const Stack = createStackNavigator();

export default function StackNavFactory({ screenName }) {
  return (
    <Stack.Navigator
        screenOptions={{
            headerMode: "screen",
            headerBackTitleVisible: false,
            headerTintColor: "white",
            headerStyle: {
                shadowColor: "rgba(255, 255, 255, 0.3)",
                backgroundColor: "black"
            }
        }}
    >
      {screenName === "Feed" ? (
        <Stack.Screen name="Feed" component={Feed} options={{
            headerTitle: () => 
                <Image
                    style={{
                        maxHeight: 40
                    }} 
                    resizeMode="contain" 
                    source={require("../../assets/insta_logo.png")} 
                />
        }} />
      ) : null}
      {screenName === "Search" ? (
        <Stack.Screen name="Search" component={Search} />
      ) : null}
      {screenName === "Notifications" ? (
        <Stack.Screen name="Notifications" component={Notifications} />
      ) : null}
      {screenName === "Me" ? <Stack.Screen name="Me" component={Me} /> : null}
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Photo" component={Photo} />
    </Stack.Navigator>
  );
}