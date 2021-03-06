import React, { Component } from "react";
import {
    Text,
    View,
    Button,
    TouchableHighlight,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    TouchableNativeFeedback,
    ScrollView,
    Image,
    Picker,
    KeyboardAvoidingView
} from "react-native";
import {
    defaultStyleForView,
    styleButtonWidget,
    textInputStyle,
    touchableStyle,
    imageStyle,
    textStyle,
    pickerStyle,
    safeViewStyle
} from "../../style/globalStyle";
import { TechFriendName } from "../../component/ScreenNames/ScreenNames";
import { SafeAreaView } from "react-navigation";
import CalebPicture from "../../assets/caleb.jpeg";

export default class AppLearning extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            buttonPress: "Press Me!",
            textInput: "",
            pickerValue: "rap"
        };
    }
    static navigationOptions = {
        title: "Welcome to my learning field"
    };

    handleButtonPress = event => {
        this.state.buttonPress === "Press Me!"
            ? this.setState({ buttonPress: "You Pressed me!" })
            : this.setState({ buttonPress: "Press Me!" });
        alert(`Text Saved is ${this.state.textInput}`);
    };
    handleTextChange = newText => {
        this.setState({ textInput: newText });
    };
    handleTextSubmitted = () => {
        alert(`Text submitted is ${this.state.textInput}`);
    };
    render() {
        const defaultStyleForViewContainer = defaultStyleForView.viewContainer;
        const { navigate, state } = this.props.navigation;
        return (
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior="padding"
                enabled
            >
                <SafeAreaView>
                    <ScrollView>
                        <View style={{ ...defaultStyleForViewContainer }}>
                            <Image
                                source={CalebPicture}
                                style={imageStyle.profileImage}
                            ></Image>
                            <Text style={textStyle.imageText}>
                                {" "}
                                Calebdeji is learning react native, hahaha, you
                                didn't see it coming{" "}
                            </Text>
                        </View>
                        <View
                            style={{
                                ...defaultStyleForViewContainer,
                                backgroundColor: "red"
                            }}
                        >
                            <TouchableHighlight
                                onPress={() => {
                                    alert("Touchable Pressed ");
                                }}
                                style={touchableStyle.button}
                                underlayColor="white"
                                activeOpacity={0.4}
                            >
                                <View style={touchableStyle.container}>
                                    <Text style={touchableStyle.text}>
                                        Hello Touchable
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View
                            style={{
                                ...defaultStyleForViewContainer,
                                backgroundColor: "rgb(105, 61, 3)"
                            }}
                        >
                            <TouchableOpacity
                                style={touchableStyle.button}
                                onPress={() => {
                                    alert("Touchable Opacity pressed!");
                                }}
                            >
                                <View style={touchableStyle.container}>
                                    <Text style={touchableStyle.text}>
                                        {" "}
                                        Touchable Opacity
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                ...defaultStyleForViewContainer,
                                backgroundColor: "rgb(105, 3, 32)"
                            }}
                        >
                            <TouchableWithoutFeedback
                                style={touchableStyle.button}
                                onPress={() => {
                                    alert(
                                        "Touchable Without feedback pressed!"
                                    );
                                }}
                            >
                                <View style={touchableStyle.container}>
                                    <Text style={touchableStyle.text}>
                                        {" "}
                                        Touchable Without Feedback
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                        <View
                            style={{
                                ...defaultStyleForViewContainer,
                                backgroundColor: "rgb(3, 105, 44)"
                            }}
                        >
                            <TouchableNativeFeedback
                                style={touchableStyle.button}
                                onPress={() => {
                                    alert("Touchable with feedback pressed!");
                                }}
                            >
                                <View style={touchableStyle.container}>
                                    <Text style={touchableStyle.text}>
                                        {" "}
                                        Touchable with feedback
                                    </Text>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                        <View
                            style={{
                                ...defaultStyleForViewContainer,
                                backgroundColor: "yellow"
                            }}
                        >
                            <Text style={{ color: "black" }}>Calebdeji</Text>
                        </View>
                        <View
                            style={{
                                ...defaultStyleForViewContainer,
                                backgroundColor: "#f5f5f5"
                            }}
                        >
                            <TextInput
                                value={this.state.textInput}
                                onChangeText={changedText => {
                                    this.handleTextChange(changedText);
                                }}
                                onEndEditing={this.handleTextSubmitted}
                                style={textInputStyle.textInput}
                                placeholder="Input your text..."
                                multiline={false}
                            ></TextInput>
                        </View>
                        <View
                            style={{
                                ...defaultStyleForViewContainer,
                                backgroundColor: "pink"
                            }}
                        >
                            <Picker
                                selectedValue={this.state.pickerValue}
                                onValueChange={(pickerValue, pickerIndex) => {
                                    this.setState({ pickerValue });
                                }}
                                mode="dropdown"
                                style={pickerStyle.pickerContainer}
                            >
                                <Picker.Item label="Rap" value="rap" />
                                <Picker.Item label="Hip-Hop" value="hiphop" />
                                <Picker.Item label="Country" value="country" />
                            </Picker>
                        </View>
                        <View style={styleButtonWidget.buttonContainer}>
                            <Button
                                onPress={() => {
                                    navigate(TechFriendName);
                                    console.log("state is : ", state);
                                }}
                                title="Navigate to my Tech Friends"
                                color="orange"
                            ></Button>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </KeyboardAvoidingView>
        );
    }
}
