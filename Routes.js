import React from 'react';
import { 
    createAppContainer, 
    createSwitchNavigator, 
    createStackNavigator, 
    createDrawerNavigator
} from 'react-navigation';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';
import LoginScreen from './screens/LoginScreen';
import RegScreen from './screens/RegScreen';
import HomeScreen from './screens/HomeScreen';
import LogoutScreen from './screens/LogoutScreen';
import ProfileScreen from './screens/ProfileScreen';

class Routes extends React.Component {
    render() {
        return (
            <AppContainer />
        );
    }
}

const StackNavigation = createStackNavigator(
    {
        Login: { screen: LoginScreen },
        Register: { screen: RegScreen }
    },
    {
        initialRouteName: "Login"
    }
);

const DrawerNavigation = createDrawerNavigator(
    {
        Home: HomeScreen,
        Profile: ProfileScreen,
        Logout: LogoutScreen
    },
    {
        initialRouteName: "Home"
    }
);

const AppNavigation = createSwitchNavigator(
    {
        Auth: StackNavigation,
        Main: DrawerNavigation
    },
    {
        initialRouteName: "Auth"
    }
);

const AppContainer = createAppContainer(AppNavigation);

export default Routes;