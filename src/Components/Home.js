import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate('Profile')
                }}>
                    <Text>Home Screen</Text>

                </TouchableOpacity>
            </View>
        );
    }
}