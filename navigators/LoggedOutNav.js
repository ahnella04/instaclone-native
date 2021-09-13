import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Login from "../screens/Login";
import Welcome from "../screens/Welcome";
import CreateAccount from "../screens/CreateAccount"

const Stack = createNativeStackNavigator();

export default function LoggedOutNav() {
    return (
        <Stack.Navigator screenOptions={{
            headerBackTitleVisible: false,
            headerTitle: false,
            headerTransparent: true,
            headerTintColor: "white"
        }}>
            <Stack.Screen name="Welcome" options={{
                headerShown: false
            }} component={Welcome} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="CreateAccount" component={CreateAccount} />
        </Stack.Navigator>
    );
}