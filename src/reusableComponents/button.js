import  React,{ Component } from 'react';
import { global_measure } from '../Global_variable/variable';
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native';

export default class Button extends Component {
    render() {
        return (
           <TouchableHighlight style={[styles.buttonStyle,this.props.buttonStyle]}  onPress={this.props.onPress} underlayColor={null}>
                <Text style={[styles.labelStyle,this.props.labelStyle]}>{this.props.label}</Text>
            </TouchableHighlight>            
        );
    }   
}

const styles = StyleSheet.create({
    buttonStyle:{
        height:global_measure*2,
        //backgroundColor:'black',
        alignItems:'center',
        justifyContent:'center',
        padding: global_measure
    },
    containerStyle: {
    },
    labelStyle:{
        color:'purple',
        fontFamily:'cursive',
        fontWeight:'bold',
        fontSize:global_measure*2
    }
});