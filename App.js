import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';


const style = StyleSheet.create({
	text : {
		fontSize : 14,
		fontFamily : 'Arial'
	},
	blue : {
		color : 'blue',
	},
	red : {
		color : 'red'
	}
})
export default class HelloWorldApp extends Component {
  render() {
    let pic = {uri : 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}
    return (
      	<View style={{flex : 1, flexDirection : "row",justifyContent: "space-evenly"}}>
			<View style={{ flex:1, backgroundColor : 'red'}}>
			{/* <DeveloperName name="Caleb" style ={style.text, style.blue}/>
			<DeveloperName name="Deji" style ={style.text, style.red}/>
			<Image source = {pic} style={{width : 110, height : 110}}/> */}
			</View>
			<View style={{ flex : 1, backgroundColor : 'yellow'}}>
				<Text>
					Calebdeji
				</Text>
			</View>
			<View style={{ flex : 1, backgroundColor : 'green'}}>

			</View>
	  	</View>
    );
  }
}
class DeveloperName extends Component{
	constructor(props){
		super(props);
		this.props = props;
		this.state = { status : false };
	}
	
	componentDidMount(){
		setInterval(() => {
			this.setState((state)=>({
				status : !state.status
			}))
		}, 1000);
	}
	render(){
			return(
				<View>
					{
						!this.state.status ? null : <Text style={this.props.style}>Welcome {this.props.name}</Text>
					}
				</View>
			)
	}
}