import React from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Text,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

const LoginForm = (props) => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <ScrollView style={styles.container}>
            {props.loading ?
                <View style={{ marginVertical: "20%" }}>
                    <ActivityIndicator size={80} />
                </View> :

                <View style={{ alignItems: "center" }}>
                    <Text style={{ fontSize: 25 }}>LOGIN!</Text>
                    <TextInput
                        value={username}
                        onChangeText={(username) => setUsername(username)}
                        placeholder='username'
                        placeholderTextColor='gray'
                        style={styles.input}
                    />
                    <TextInput
                        value={password}
                        onChangeText={(password) => setPassword(password)}
                        placeholder={'password'}
                        secureTextEntry={true}
                        placeholderTextColor='gray'
                        style={styles.input}
                    />
                    <View style={{ flexDirection: 'row' }}>
                        <View>
                            <TouchableOpacity>
                                <Text style={styles.text}>Forgot Password</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={props.onReg}>
                                <Text style={styles.text}>Or Create an Account</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            style={styles.arrow}
                            onPress={() => props.login({
                                username: username,
                                password: password
                            })}
                        >
                            <Ionicons name="md-arrow-dropright" size={70} color="#0FBF25" />
                        </TouchableOpacity>
                    </View>
                </View>}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '90%',
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        borderRadius: 10,
        marginBottom: 20,
        paddingVertical: 10
    },

    input: {
        width: '90%',
        fontSize: 20,
        height: 44,
        padding: 10,
        borderWidth: 2,
        borderColor: 'white',
        marginVertical: 10,
    },

    arrow: {
        backgroundColor: 'white',
        height: 50,
        width: 50,
        borderRadius: 50 / 2,
        justifyContent: 'center',
        paddingLeft: 20,
        marginLeft: 40,
        marginTop: 10
    },

    text: {
        marginVertical: 5,
        fontSize: 20,
        color: 'gray',
        textDecorationLine: 'underline'
    }
});

export default LoginForm;