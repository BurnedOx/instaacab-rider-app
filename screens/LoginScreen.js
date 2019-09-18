import React from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    Image
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';
import image from '../assets/bg-01.jpg';
import logo from '../assets/logo.png';
import LoginForm from '../components/LoginForm';

class LoginScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    componentDidMount() {
        this.props.getToken()
            .then(res => this.props.navigation.navigate('Main'))
            .catch(err => console.log("no token"))
    }

    componentDidUpdate() {
        this.props.getToken()
            .then(res => this.props.navigation.navigate('Main'))
            .catch(err => console.log("no token"))
    }

    regHandler = () => {
        this.props.regInit();
        this.props.navigation.navigate('Register')
    };

    render() {
        return (
            <ImageBackground style={styles.container} source={image}>
                <View style={styles.logoContainer}>
                    <Image source={logo} style={styles.logo} />
                </View>
                <LoginForm
                    onReg={this.regHandler}
                    login={this.props.login}
                    loading={this.props.loading}
                />
            </ImageBackground>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },

    logoContainer: {
        height: '50%',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20
    },

    logo: {
        height: '90%',
        width: '80%'
    }
});

const mapStateToProps = state => ({
    loading: state.auth.loading,
    token: state.auth.token
});

const mapDispatchToProps = dispatch => ({
    regInit: () => dispatch(actions.regInit()),
    login: (data) => dispatch(actions.login(data)),
    getToken: () => dispatch(actions.autoGetToken())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);