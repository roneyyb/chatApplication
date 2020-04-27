import React from 'react';
import { View, Text, StyleSheet, TouchableHighlightBase } from 'react-native';
import TextInput from '../reusableComponents/textInput';
import Button from '../reusableComponents/button';
import { global_measure } from '../Global_variable/variable';

export default class Main extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            value:''
        };
    }
    
    onPress = () => {
        this.props.navigation.navigate('chat',{
            name:this.state.value
        });
        this.setState({value:''});
    }

    onChange = (value) => {
        this.setState({value});
    }
    
    
    render() {
        return(
        <View style={styles.containerStyle}>
            <Text style={styles.logoStyle}>{'Chatapp'}</Text>
            <TextInput style={styles.textInputstyle} onChange={this.onChange} value={this.state.value}/>
            <Button buttonStyle={styles.buttonStyle} onPress={this.onPress} label={'Next'}/>
        </View>        
        );
    }
}

const styles = StyleSheet.create({
    logoStyle: {
        alignSelf:'center',
        marginRight:global_measure*2,
        fontFamily:'cursive',
        fontStyle:'normal',
        color:'purple',
        fontWeight:'bold',
        fontSize:global_measure*3,
        marginTop:global_measure * 3
    },
    containerStyle: {
        flex:1, backgroundColor:'white'
    },
    textInputstyle: {
            marginTop: global_measure*3,
            paddingLeft:global_measure,
            marginLeft:global_measure*4,
            marginRight:global_measure*4
        },
    buttonStyle: {
        marginTop:global_measure*2,
        borderRadius:global_measure,
        alignSelf:'flex-start', 
        marginLeft:global_measure*4,
    }
});