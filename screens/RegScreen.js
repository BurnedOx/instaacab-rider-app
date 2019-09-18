import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';
import {
    StyleSheet,
    Text,
    ImageBackground,
    Button
} from 'react-native';
import image from '../assets/bg-01.jpg';
import RegForm from '../components/RegForm';
import CustomModal from '../components/CustomModal';

class RegScreen extends React.Component {
    static navigationOptions = {
        title: 'Register',
        headerStyle: {
            backgroundColor: '#FCD705',
        },
    };

    modalHandler = () => {
        this.props.regInit();
        this.props.navigation.navigate("Login");
    };

    registerHandler = (data) => {
        const mobile = data.mobile;
        delete data.mobile;
        this.props.register(data);
    };

    render() {
        return (
            <ImageBackground style={styles.container} source={image}>
                <RegForm register={this.registerHandler} loading={this.props.loading} />

                <CustomModal show={this.props.message !== null}>
                    <Text style={{ fontSize: 30, marginBottom: 10 }}>{this.props.message}</Text>
                    <Button title="Login" onPress={this.modalHandler} />
                </CustomModal>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    }
});

const mapSateToProps = state => ({
    message: state.auth.message,
    loading: state.auth.loading
});

const mapDispatchToProps = (dispatch) => ({
    register: (data) => dispatch(actions.register(data)),
    regInit: () => dispatch(actions.regInit())
});

export default connect(mapSateToProps, mapDispatchToProps)(RegScreen);