import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import * as actions from "../store/actions/index";

class LogoutScreen extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.logout();
            this.props.navigation.navigate("Auth");
        }, 2000)
    }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#fff"
                }}
            >
                <Text style={{fontSize: 30}}>Bye!!</Text>
            </View>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(actions.logout())
});

export default connect(null, mapDispatchToProps)(LogoutScreen);