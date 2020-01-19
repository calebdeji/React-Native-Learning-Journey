import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./pages/AppLearning/AppLearning";
import TechFriendScreen from "./pages/TechFriendsList/TechFriendsList";
import { ActivityIndicator, AsyncStorage } from "react-native";
import { navigationOptionStyle } from "./style/globalStyle";
import {
    HomeScreenName,
    TechFriendName
} from "./component/ScreenNames/ScreenNames";

const AppNavigator = createStackNavigator(
    {
        [HomeScreenName]: { screen: HomeScreen },
        [TechFriendName]: { screen: TechFriendScreen }
    },
    {
        defaultNavigationOptions: {
            ...navigationOptionStyle
        }
    }
);

const AppContainer = createAppContainer(AppNavigator);

const persistenceKey = "persistenceKey";

const persistNavigationState = async navState => {
    try {
        await AsyncStorage.setItem(persistenceKey, JSON.stringify(navState));
    } catch (err) {
        // handle the error according to your needs
        await AsyncStorage.setItem(persistenceKey, "");
    }
};

const loadNavigationState = async () => {
    const jsonString = await AsyncStorage.getItem(persistenceKey);
    return JSON.parse(jsonString);
};

const App = () => (
    <AppContainer
        persistNavigationState={persistNavigationState}
        loadNavigationState={loadNavigationState}
        renderLoadingExperimental={() => <ActivityIndicator />}
    />
);
export default App;
