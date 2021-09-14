import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const isLoggedInVar = makeVar(false);
export const tokenVar = makeVar("");

export const logUserIn = async (token) => {
    await AsyncStorage.multiSet([
        ["token", token], 
        ["loggedIn", "yes"]
    ])
    isLoggedInVar(true);
    tokenVar(token);
}

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql", // 너의 시뮬레이터가 GraphQL에 접근이 가능해졌다는 말
    cache: new InMemoryCache()
})

export default client;