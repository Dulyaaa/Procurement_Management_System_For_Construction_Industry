/* eslint-disable prettier/prettier */
import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Strings, Colors } from '../constants';

export default class RegisterScreen extends React.Component {
    static navigationOptions = {
        title: 'Register',
    };

    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            name: '',
            email: '',
            password: '',
            role: '',
            userDetails: {},
        };
        this.onChangeUserId = this.onChangeUserId.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeRole = this.onChangeRole.bind(this);
        this.createUser = this.createUser.bind(this);
    }

    /**
    * @description This method changes the value of userId
    * @param {object} e
    * @memberof RegisterScreen
    */
    onChangeUserId = (e) => {
        this.setState({ userId: e });
    }

    /**
     * @description This method changes the value of name
     * @param {object} e
     * @memberof RegisterScreen
     */
    onChangeName = (e) => {
        this.setState({ name: e });
    }

    /**
     * @description This method changes the value of email
     * @param {object} e
     * @memberof RegisterScreen
     */
    onChangeEmail = (e) => {
        this.setState({ email: e });
    }

    /**
     * @description This method changes the value of password
     * @param {object} e
     * @memberof RegisterScreen
     */
    onChangePassword = (e) => {
        this.setState({ password: e });
    }

    /**
     * @description This method changes the value of role
     * @param {object} e
     * @memberof RegisterScreen
     */
    onChangeRole = (e) => {
        this.setState({ role: e });
    }

    /**
     * @description This method creates a new user
     * @memberof RegisterScreen
     */
    createUser() {
        var url = 'http://192.168.8.105:8080/user/createUser';
        var data = {
            userId: this.state.userId,
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            role: this.state.role,
        };
        axios.post(url, data)
            .then(response => {
                this.setState({
                    userDetails: response.data,
                });

                const role = this.state.role;
                const siteManger = Strings.siteManger;
                const supplier = Strings.supplier;

                if (role === siteManger) {
                    this.props.navigation.navigate('SiteDashboardScreen', { user_details: this.state.userId });
                }
                else if (role === supplier) {
                    this.props.navigation.navigate('SupplierDashboardScreen', { user_details: this.state.userId });
                }
                // Alert.alert(
                //     'Success ✔',
                //     'You have been registered successfully!!',
                //     [
                //         { text: 'OK', onPress: () => this.props.navigation.navigate('LogInScreen') },
                //     ],
                //     { cancelable: false },
                // );

                console.log(response);
            })
            .catch(error => {
                console.log(error);
                Alert.alert(
                    'Error ❌',
                    'You have been registered unsuccessfully!!',
                    [
                        { text: 'Check Again?', },
                    ],
                    { cancelable: false },
                );
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Image
                        style={styles.image}
                        source={require('../../images/sign.png')}
                    />
                    <View style={styles.card}>

                        {/* User ID Text Input */}
                        <View style={styles.inputView}>
                            <TextInput
                                value={this.state.userId}
                                style={styles.TextInput}
                                placeholder="Employee ID"
                                placeholderTextColor={Colors.textInput}
                                onChangeText={this.onChangeUserId}
                            />
                        </View>
                        {/* User Role Text Input */}
                        <View style={styles.inputView}>
                            <TextInput
                                value={this.state.role}
                                style={styles.TextInput}
                                placeholder="User Role"
                                placeholderTextColor={Colors.textInput}
                                onChangeText={this.onChangeRole}
                            />
                        </View>
                        {/* User Name Text Input */}
                        <View style={styles.inputView}>
                            <TextInput
                                value={this.state.name}
                                style={styles.TextInput}
                                placeholder="Name"
                                placeholderTextColor={Colors.textInput}
                                onChangeText={this.onChangeName}
                            />
                        </View>
                        {/* User Email Text Input */}
                        <View style={styles.inputView}>
                            <TextInput
                                value={this.state.email}
                                style={styles.TextInput}
                                placeholder="User Email"
                                placeholderTextColor={Colors.textInput}
                                onChangeText={this.onChangeEmail}
                            />
                        </View>
                        {/* Password Text Input */}
                        <View style={styles.inputView}>
                            <TextInput
                                value={this.state.password}
                                style={styles.TextInput}
                                placeholder="Password"
                                placeholderTextColor={Colors.textInput}
                                secureTextEntry={true}
                                onChangeText={this.onChangePassword}
                            />
                        </View>
                    </View>
                    {/* Register Button */}
                    <TouchableOpacity
                        onPress={this.createUser}
                        style={styles.loginBtn}>
                        <Text style={styles.loginText}>Register Now</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.darkWhite,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        width: 350,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 35,
        alignSelf: 'center',
    },
    inputView: {
        width: '70%',
        height: 45,
        marginBottom: 20,
        backgroundColor: '#E8E8E8',
        borderRadius: 15,
        alignItems: 'center',
    },
    TextInput: {
        flex: 1,
        color: Colors.black,
        height: 50,
        marginLeft: 15,
        padding: 10,
    },
    loginBtn: {
        width: '60%',
        backgroundColor: Colors.yellow,
        height: 45,
        borderRadius: 25,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2
    },
    loginText: {
        color: Colors.black,
        fontWeight: 'bold',
        fontSize: 15,
    },
});
