import React from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { Ionicons } from '@expo/vector-icons';

const RegForm = (props) => {
    const [username, setUsername] = React.useState('');
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [mobile, setMobile] = React.useState('');

    const onClickHandler = () => {
        let [firstName, lastName] = name.split(' ');
        if (lastName === undefined) {
            lastName = "";
        }

        props.register({
            username: username,
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            password_confirm: confirmPassword,
            mobile: mobile
        });
    };

    return (
        <KeyboardAwareScrollView style={styles.container}>
            {props.loading ?
                <View style={{ marginVertical: "40%" }}>
                    <ActivityIndicator size={80} />
                </View> :
                <View style={{ alignItems: 'center' }}>
                    <TextInput
                        value={username}
                        onChangeText={(username) => setUsername(username)}
                        placeholder='username'
                        placeholderTextColor='gray'
                        style={styles.input}
                    />
                    <TextInput
                        value={name}
                        onChangeText={(name) => setName(name)}
                        placeholder='name'
                        placeholderTextColor='gray'
                        style={styles.input}
                    />
                    <TextInput
                        value={email}
                        keyboardType="email-address"
                        onChangeText={(email) => setEmail(email)}
                        placeholder='email'
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
                    <TextInput
                        value={confirmPassword}
                        onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
                        placeholder={'confirm password'}
                        secureTextEntry={true}
                        placeholderTextColor='gray'
                        style={styles.input}
                    />
                    <TextInput
                        value={mobile}
                        keyboardType="number-pad"
                        onChangeText={(mobile) => setMobile(mobile)}
                        placeholder='mobile number'
                        placeholderTextColor='gray'
                        style={styles.input}
                    />
                    <TouchableOpacity style={styles.arrow} onPress={onClickHandler}>
                        <Ionicons name="md-arrow-dropright" size={70} color="#0FBF25" />
                    </TouchableOpacity>
                </View>
            }
        </KeyboardAwareScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '90%',
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        borderRadius: 10,
        marginVertical: 20,
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
        marginTop: 10
    },

    text: {
        marginVertical: 5,
        fontSize: 20,
        color: 'gray',
        textDecorationLine: 'underline'
    }
});

export default RegForm;