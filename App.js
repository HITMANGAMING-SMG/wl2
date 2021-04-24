import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import TransactionScreen from "./screens/TransactionScreen";
import SearchScreen from "./screens/SearchScreen";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    Transaction: {
      screen: TransactionScreen,
    },
    Search: {
      screen: SearchScreen,
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({}) => {
        const routeName = navigation.state.routeName;
        if (routeName === "Transaction") {
          return (
            <Image
              style={{ width: 30, height: 30 }}
              source={require("./assets/book.png")}
            />
          );
        } else if (routeName === "Search") {
          return (
            <Image
              style={{ width: 30, height: 30 }}
              source={require("./assets/searchingbook.png")}
            />
          );
        }
      },
      tabBarOptions: {
        activeTintColor: "red",
        inactiveTintColor: "grey",
      },
    }),
  }
);

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
