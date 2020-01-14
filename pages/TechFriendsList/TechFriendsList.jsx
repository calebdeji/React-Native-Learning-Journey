import React, { Component } from "react";
import { FlatList, View, Text } from "react-native";
import { flatListStyle } from "../../style/globalStyle";

export default class TechFriendsList extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return (
            <View>
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <View style={flatListStyle.flatListViewStyle}>
                            <Text style={flatListStyle.flatListTextStyle}>
                                {" "}
                                Full Name : {item.name}{" "}
                            </Text>
                            <Text style={flatListStyle.flatListTextStyle}>
                                {" "}
                                Nick Name : {item.nickname}{" "}
                            </Text>
                            <Text style={flatListStyle.flatListTextStyle}>
                                {" "}
                                Tech Stack : {item.techStack}{" "}
                            </Text>
                        </View>
                    )}
                    keyExtractor={(item, index) => item.id}
                ></FlatList>
            </View>
        );
    }
}
