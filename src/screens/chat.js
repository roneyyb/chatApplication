import React from 'react';
import { Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import Firebase from '../configuration/firebase';
import { global_measure } from '../Global_variable/variable';

export default class Chat extends React.Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: () => 
        <Text
          style={{
            fontSize: global_measure * 1.5,
            color: '#8D8D8C',
            alignSelf:'center',
            fontWeight: 'bold'
          }}
        >
       {(navigation.state.params || {}).name || 'Chat!'}
        </Text>
    });

    constructor(props) {
        super(props);
        console.log('chat app constttructor');
        this.state = {messages: []};
      }

      get user() {
        // Return our name and our UID for GiftedChat to parse
        const a ={
          name: this.props.navigation.state.params.name
        };
        //console.log(a);
        return a;
      }

      onSend = (messages = []) => {
        this.setState((previousState) => {
          return {
            messages: GiftedChat.append(previousState.messages, messages),
          };
        });
      }
    
    render() {
        return(
            <GiftedChat
              messages={this.state.messages}
               onSend={Firebase.shared.send}
               user={this.user}
            />
        );
    }

componentDidMount() {
  Firebase.shared.on(message => {
    console.log("message =>",message);
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, message),
    }))}
  );
}

componentWillUnmount() {
Firebase.shared.off();
}
    
}

