/* eslint-disable prettier/prettier */
import axios from 'axios';
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import { Input } from 'react-native-elements';
import { Colors, Strings } from '../../constants';

const initialState = {
    chequeNo: '',
    issuePerson: '',
    issueTo: '',
    amount: '',
    issueDate: '',
    paymentDetails: {},
};

export default class NewPaymentScreen extends React.Component {
    static navigationOptions = {
        title: 'New Payment',
    };

    constructor(props) {
        super(props);
        this.state = initialState;
        this.onChangeChequeId = this.onChangeChequeId.bind(this);
        this.onChangeIssuePerson = this.onChangeIssuePerson.bind(this);
        this.onChangeIssueTo = this.onChangeIssueTo.bind(this);
        this.onChangeAmount = this.onChangeAmount.bind(this);
        this.onChangeIssueDate = this.onChangeIssueDate.bind(this);
        this.makeAPayment = this.makeAPayment.bind(this);
    }

    /**
    * @description This method changes the value of chequeNo
    * @param {Object} e
    * @memberof NewPaymentScreen
    */
    onChangeChequeId = (e) => {
        this.setState({ chequeNo: e });
    }

    /**
    * @description This method changes the value of issuePerson
    * @param {Object} e
    * @memberof NewPaymentScreen
    */
    onChangeIssuePerson = (e) => {
        this.setState({ issuePerson: e });
    }

    /**
    * @description This method changes the value of issueTo
    * @param {Object} e
    * @memberof NewPaymentScreen
    */
    onChangeIssueTo = (e) => {
        this.setState({ issueTo: e });
    }

    /**
    * @description This method changes the value of amount
    * @param {Object} e
    * @memberof NewPaymentScreen
    */
    onChangeAmount = (e) => {
        this.setState({ amount: e });
    }

    /**
    * @description This method changes the value of issueDate
    * @param {Object} e
    * @memberof NewPaymentScreen
    */
    onChangeIssueDate = (e) => {
        this.setState({ issueDate: e });
    }

    /**
    * @description This method creates a payment
    * @param {Object} e
    * @memberof NewPaymentScreen
    */
    makeAPayment = () => {
        var url = 'http://192.168.8.105:8080/payment/createPayment';
        const paymentDetails = {
            chequeNo: this.state.chequeNo,
            issuePerson: this.state.issuePerson,
            issueTo: this.state.issueTo,
            amount: this.state.amount,
            issueDate: this.state.issueDate,
            status: false
        };
        console.log('Payment details', paymentDetails);
        axios.post(url, paymentDetails)
            .then(response => {
                this.setState({
                    paymentDetails: response.data,
                });
                Alert.alert(
                   Strings.modal_text.success,
                    'Your payment has been placed successfully!!',
                    [
                        { text: 'OK', onPress: () => this.props.navigation.navigate(Strings.screens.SiteDashboardScreen) },
                    ],
                    { cancelable: false },
                );
            })
            .catch(error => {
                console.log(error);
                Alert.alert(
                    Strings.modal_text.error,
                    'Your payment has been placed unsuccessfully!!',
                    [
                        { text: Strings.modal_text.check_again, onPress: () => this.props.navigation.navigate(Strings.screens.NewPaymentScreen) },
                    ],
                    { cancelable: false },
                );
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.backImage}
                    source={require('../../../images/pay.png')} />
                <View style={styles.form}>
                    <ScrollView>
                        {/* Cheque No */}
                        <Input
                            value={this.state.chequeNo}
                            label="Cheque No"
                            labelStyle={styles.label}
                            inputContainerStyle={styles.inputContainer}
                            inputStyle={styles.input}
                            onChangeText={this.onChangeChequeId}
                        // placeholder='Enter Site Name'
                        />
                        {/* Issue Person */}
                        <Input
                            value={this.state.issuePerson}
                            label="Issue Person"
                            labelStyle={styles.label}
                            inputContainerStyle={styles.inputContainer}
                            inputStyle={styles.input}
                            onChangeText={this.onChangeIssuePerson}
                        />
                        {/* Issue To */}
                        <Input
                            value={this.state.issueTo}
                            label="Issue To"
                            labelStyle={styles.label}
                            inputContainerStyle={styles.inputContainer}
                            inputStyle={styles.input}
                            onChangeText={this.onChangeIssueTo}
                        />
                        {/* Amount */}
                        <Input
                            value={this.state.amount}
                            label="Amount"
                            labelStyle={styles.label}
                            inputContainerStyle={styles.inputContainer}
                            inputStyle={styles.input}
                            onChangeText={this.onChangeAmount}
                        />
                        {/* Issue Date */}
                        <Input
                            value={this.state.issueDate}
                            label="Issue Date"
                            labelStyle={styles.label}
                            inputContainerStyle={styles.inputContainer}
                            inputStyle={styles.input}
                            onChangeText={this.onChangeIssueDate}
                        />
                    </ScrollView>
                </View>
                <View style={styles.column}>
                    <TouchableOpacity
                        onPress={this.makeAPayment}
                        style={styles.btn}
                        activeOpacity={0.5}>
                        <Text style={styles.btnTxt}>Pay Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        alignItems: 'center',
        backgroundColor: Colors.darkWhite,
    },
    backImage: {
        width: 100,
        height: 100,
    },
    form: {
        flex: 1,
        flexDirection: 'row',
        width: 330,
        backgroundColor: Colors.white,
        margin: 5,
        marginTop: -5,
        padding: 20,
        borderRadius: 15,
        elevation: 5
    },
    label: {
        fontWeight: 'normal',
        color: Colors.inputLabel
    },
    inputContainer: {
        height: 38,
    },
    input: {
        fontSize: 17,
    },
    row: {
        flex: 0.5,
        flexDirection: 'row',
    },
    dropDownStyle: {
        borderColor: 'gray',
        marginBottom: 20,
    },
    dropDownText: {
        fontSize: 15,
        color: 'gray',
    },
    dropDownLabel: {
        color: 'black',
    },
    btn: {
        elevation: 2,
        margin: 10,
        padding: 3,
        width: 160,
        marginRight: 5,
        backgroundColor: Colors.yellow,
        borderRadius: 20,
        alignSelf: 'center',
        alignItems: 'center',
    },
    btnTxt: {
        padding: 5,
        color: Colors.black,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
