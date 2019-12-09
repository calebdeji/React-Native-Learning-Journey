import React, { Component } from "react";
import { Text,View, Image, StyleSheet, PixelRatio, TextInput, Button, TouchableHighlight, ScrollView } from "react-native";

const style = StyleSheet.create({
  text: {
    fontSize: 14,
    fontFamily: "Arial"
  },
  blue: {
    color: "blue"
  },
  red: {
    color: "red"
  }
});
const styleButtonWidget = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    right: 10
  },
  button: {
    height: PixelRatio.getPixelSizeForLayoutSize(35),
    width: PixelRatio.getPixelSizeForLayoutSize(35),
    borderRadius: 100,
  }
});
const textInputStyle = StyleSheet.create({
  textFieldStyle: {
    // height: PixelRatio.getPixelSizeForLayoutSize(40),
    borderStyle: "solid",
    borderBottomColor: "black",
    borderWidth: 1,
    padding: 10
  }
});
const touchableStyle = StyleSheet.create({
	container: {
		backgroundColor: 'blue',
		borderRadius: PixelRatio.getPixelSizeForLayoutSize(10),
		padding: 30,
		shadowOffset: {
			width: 10,
			height : 10
		},
		shadowColor: '#000',
		borderWidth : 0,
		shadowOpacity: 0,
		elevation : 20
	},
	button: {
		borderRadius: PixelRatio.getPixelSizeForLayoutSize(100),
		borderWidth: 0.1,

	},
	text : {
		color: "white",
		fontFamily : 'Roboto'
	}
})
export default class HelloWorldApp extends Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = { buttonPress: 'Press Me!' };
	}
	handleButtonPress = event => {
		this.state.buttonPress === 'Press Me!' ?
			this.setState({ buttonPress: 'You Pressed me!' }) :
			this.setState({ buttonPress : 'Press Me!' })
	}
	render() {
		
        let pic = {
            uri:
                "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
		};
		
        return (
          <ScrollView>
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "space-evenly"
              }}
            >
              <View
                style={{
                  flex: 1,
                  backgroundColor: "red",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <TouchableHighlight
                  onPress={() => {
                    alert("Touchable Pressed ");
                  }}
                  underlayColor="white"
                  style={touchableStyle.button}
                >
                  <View style={touchableStyle.container}>
                    <Text style={touchableStyle.text}>Hello Touchable</Text>
                  </View>
                </TouchableHighlight>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: "yellow",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text style={{ color: "black" }}>Calebdeji</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: "green",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <UserText multiline numberOfLines={4} />
              </View>
              <View style={styleButtonWidget.buttonContainer}>
                <Button
                  onPress={this.handleButtonPress}
                  title={this.state.buttonPress}
                  style={styleButtonWidget.button}
                  color="orange"
                ></Button>
              </View>
				</View>
				
          </ScrollView>
        );
    }
}
class DeveloperName extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = { status: false };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState(state => ({
                status: !state.status
            }));
        }, 1000);
    }
    render() {
        return (
            <View>
                {!this.state.status ? null : (
                    <Text style={ this.props.style }>
                        Welcome { this.props.name }
                    </Text>
                )}
            </View>
        );
    }
}
class UserText extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = { text : "" }
    }
	handleTextChange = text => {
		this.setState({ text: text });
		console.log("text : ", text);
	};
    render() {
        return (
			<TextInput
				{...this.props}
				style = {textInputStyle.textFieldStyle}
                placeholder='Input your text please'
                value={ this.state.text }
                onChangeText={ this.handleTextChange }
            ></TextInput>
        );
    }
}
