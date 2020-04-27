import React, { Component } from 'react';
import { TextInput, StyleSheet,Dimensions } from 'react-native';
import {global_measure} from '../Global_variable/variable';


export default class Textinput extends Component {
    render() {
        return (
            <TextInput
            style={[styles.textInputstyle,this.props.style]}
            placeholder={'Enter your name'}
            onChangeText={this.props.onChange}
            value={this.props.value}
            placeholderTextColor={'purple'}
            selectionColor={'purple'}
            />
        );
    }
}

const styles = StyleSheet.create({
    textInputstyle: {
    height: global_measure * 3,

    borderColor:'purple',
    color:'purple',
    fontSize:global_measure,
    fontFamily:'san-serif',
    fontWeight:'500',
    borderWidth:1.5,
    borderRadius:global_measure,
    }
});