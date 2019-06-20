import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import CounterApp from './CounterComponent';
import HomeScreen from './Home';
import Profile from './Profile';

const stack = createStackNavigator({
    HomeScreen: {
        screen: HomeScreen
    },
    Profile: {
        screen: Profile
    },
    CounterApp: {

        screen: CounterApp,
    }
},
);
const App = createAppContainer(stack);

class Routes extends React.Component {
    render() {
        return (
            <App />
        );
    }
}
export default Routes;
