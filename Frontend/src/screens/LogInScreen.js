/* eslint-disable prettier/prettier */
import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, Image, TextInput, Alert, TouchableOpacity } from 'react-native';
import { Strings, Colors } from '../constants';

export default class LogInScreen extends React.Component {
    static navigationOptions = {
        title: 'Log In',
    };

    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            email: '',
            password: '',
            loginDetails: {},
        };
        this.onChangeUserId = this.onChangeUserId.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.validate = this.validate.bind(this);
    }

    /**
    * @description This method changes the value of name
    * @param {object} e
    * @memberof LogInScreen
    */
    onChangeName = (e) => {
        this.setState({ name: e });
    }

    /**
    * @description This method changes the value of userId
    * @param {object} e
    * @memberof LogInScreen
    */
    onChangeUserId = (e) => {
        this.setState({ userId: e });
    }

    /**
    * @description This method changes the value of email
    * @param {object} e
    * @memberof LogInScreen
    */
    onChangeEmail = (e) => {
        this.setState({ email: e });
    }

    /**
    * @description This method changes the value of password
    * @param {object} e
    * @memberof LogInScreen
    */
    onChangePassword = (e) => {
        this.setState({ password: e });
    }

    /**
    * @description This method changes the value of name
    * @param {object} e
    * @memberof LogInScreen
    */
    validate() {
        var url = `http://192.168.8.105:8080/user/userById/${this.state.userId}`;
        axios.get(url)
            .then(response => {
                this.setState({ loginDetails: response.data.data[0] });

                const enteredEmail = this.state.email;
                const validEmail = this.state.loginDetails.email;
                const enteredPassword = this.state.password;
                const validPassword = this.state.loginDetails.password;

                if (enteredEmail === validEmail && enteredPassword === validPassword) {
                    const role = this.state.loginDetails.role;

                    const siteManger = Strings.siteManger;
                    const supplier = Strings.supplier;

                    if (role === siteManger) {
                        this.props.navigation.navigate(Strings.screens.SiteDashboardScreen, { user_details: this.state.userId });
                    }
                    else if (role === supplier) {
                        this.props.navigation.navigate(Strings.screens.SupplierDashboardScreen, { user_details: this.state.userId });
                    }
                } else {
                    Alert.alert(
                        Strings.modal_text.error,
                        Strings.modal_text.invalid_credentials,
                        [
                            { text: Strings.modal_text.check_again },
                        ],
                        { cancelable: false },
                    );
                }
            })
            .catch(error => {
                alert(error.message);
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={require('../../images/log.png')}
                />
                <View style={styles.inputView}>
                    <TextInput
                        value={this.state.userId}
                        style={styles.TextInput}
                        placeholder={Strings.login_textInput.employeeId}
                        placeholderTextColor={Colors.textInput}
                        onChangeText={this.onChangeUserId}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        value={this.state.email}
                        style={styles.TextInput}
                        placeholder={Strings.login_textInput.email}
                        placeholderTextColor={Colors.textInput}
                        onChangeText={this.onChangeEmail}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        value={this.state.password}
                        style={styles.TextInput}
                        placeholder={Strings.login_textInput.password}
                        placeholderTextColor={Colors.textInput}
                        secureTextEntry={true}
                        onChangeText={this.onChangePassword}
                    />
                </View>
                <TouchableOpacity
                    onPress={this.validate}
                    style={styles.loginBtn}>
                    <Text style={styles.loginText}>Log In</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.darkWhite,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 100,
        height: 100,
        marginTop: -30,
        marginBottom: 30,
    },
    inputView: {
        backgroundColor: '#E8E8E8',
        borderRadius: 15,
        width: '70%',
        height: 45,
        marginBottom: 20,

        alignItems: 'center',
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 15,
        color: Colors.black,
    },
    loginBtn: {
        width: '60%',
        borderRadius: 25,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.yellow,
        elevation: 2,
    },
    loginText: {
        color: Colors.black,
        fontSize: 15,
        fontWeight: 'bold',
    },
});
