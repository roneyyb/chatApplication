import { createAppContainer } from 'react-navigation'; 
import { createStackNavigator } from 'react-navigation-stack';


//screens importing
import Main from '../screens/main';
import Chat from '../screens/chat';

const stack = createStackNavigator({
    main: { 
        screen: Main,
        navigationOptions: {
        header: () => null
        }
    },
    chat: { screen: Chat},
     
}, {
    initialRouteName: 'main'
});

const Container = createAppContainer(stack);

export default Container;