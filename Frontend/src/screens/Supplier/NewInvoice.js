/* eslint-disable prettier/prettier */
import axios from 'axios';
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Alert, Image } from 'react-native';
import { Input } from 'react-native-elements';
import { Colors } from '../../constants';

const initialState = {
    orderId: '',
    material: '',
    quantity: '',
    unitCost: '',
    totalPrice: '',
    status: false,
};

export default class NewInvoiceScreen extends React.Component {
    static navigationOptions = {
        title: 'New Invoice',
    };

    constructor(props) {
        super(props);
        this.state = initialState;
        this.onChangeOrderId = this.onChangeOrderId.bind(this);
        this.onChangeMaterial = this.onChangeMaterial.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onChangeUnitCost = this.onChangeUnitCost.bind(this);
        this.onChangeTotalCost = this.onChangeTotalCost.bind(this);
        this.addInvoice = this.addInvoice.bind(this);
    }

    componentDidMount = () => {
        this.getDetails();
    }

    getDetails = () => {
        const { navigation } = this.props;
        const param = navigation.getParam('order_id');
        this.setState({
            orderId: param.orderId,
            material: param.material, 
            quantity: param.quantity,
        });
    };

    /**
    * @description This method changes the value of order id
    * @param {Object} e
    * @memberof NewInvoiceScreen
    */
    onChangeOrderId = (e) => {
        this.setState({ orderId: e });
    }

    /**
    * @description This method changes the value of material
    * @param {Object} e
    * @memberof NewInvoiceScreen
    */
    onChangeMaterial = (e) => {
        this.setState({ material: e });
    }

    /**
    * @description This method changes the value of quantity
    * @param {Object} e
    * @memberof NewInvoiceScreen
    */
    onChangeQuantity = (e) => {
        this.setState({ quantity: e });
    }

    /**
    * @description This method changes the value of unitCost
    * @param {Object} e
    * @memberof NewInvoiceScreen
    */
    onChangeUnitCost = (e) => {
        this.setState({ unitCost: e });
    }

    /**
    * @description This method changes the value of totalPrice
    * @param {Object} e
    * @memberof NewInvoiceScreen
    */
    onChangeTotalCost = (e) => {
        this.setState({ totalPrice: e });
    }

    /**
    * @description This method creates invoice
    * @memberof NewInvoiceScreen
    */
    addInvoice = () => {
        var url = 'http://192.168.8.105:8080/invoice/createInvoice';
        const invoiceDetails = {
            orderId: this.state.orderId,
            material: this.state.material,
            quantity: this.state.quantity,
            unitCost: this.state.unitCost,
            totalPrice: this.state.totalPrice,
            status: false,
        };
        console.log('Invoice details', invoiceDetails);
        axios.post(url, invoiceDetails)
            .then(response => {
                this.setState({
                    invoiceDetails: response.data,
                });
                Alert.alert(
                    'Success ✔',
                    'Your invoice has been placed successfully!!',
                    [
                        { text: 'OK', onPress: () => this.props.navigation.navigate('SupplierDashboardScreen') },
                    ],
                    { cancelable: false },
                );
            })
            .catch(error => {
                console.log(error);
                Alert.alert(
                    'Error ❌',
                    'Your invoice has been placed unsuccessfully!!',
                    [
                        { text: 'Check Again?', onPress: () => this.props.navigation.navigate('NewInvoiceScreen') },
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
                    source={require('../../../images/invoices.png')} />

                <View style={styles.form}>
                    <ScrollView>
                        <Input
                            value={this.state.orderId}
                            label="Order ID"
                            labelStyle={styles.label}
                            inputContainerStyle={styles.inputContainer}
                            inputStyle={styles.input}
                            onChangeText={this.onChangeOrderId}
                        // placeholder='Enter Site Name'
                        />
                        <Input
                            value={this.state.material}
                            label="Material"
                            labelStyle={styles.label}
                            inputContainerStyle={styles.inputContainer}
                            inputStyle={styles.input}
                            onChangeText={this.onChangeMaterial}
                        // placeholder='Enter Site Name'
                        />
                        <Input
                            value={this.state.quantity}
                            label="Quantity"
                            labelStyle={styles.label}
                            inputContainerStyle={styles.inputContainer}
                            inputStyle={styles.input}
                            onChangeText={this.onChangeQuantity}
                        />
                        <Input
                            value={this.state.unitCost}
                            label="Unit Cost (Rs:)"
                            labelStyle={styles.label}
                            inputContainerStyle={styles.inputContainer}
                            inputStyle={styles.input}
                            onChangeText={this.onChangeUnitCost}
                        />
                        <Input
                            value={this.state.totalPrice}
                            label="Total Cost (Rs:)"
                            labelStyle={styles.label}
                            inputContainerStyle={styles.inputContainer}
                            inputStyle={styles.input}
                            onChangeText={this.onChangeTotalCost}
                        />
                        {/* <Input
                            label="User ID"
                            labelStyle={styles.label}
                            inputContainerStyle={styles.inputContainer}
                            inputStyle={styles.input}
                            onChangeText={this.onChangeDeadline}
                        /> */}
                    </ScrollView>
                </View>
                <View style={styles.column}>
                    <TouchableOpacity
                        onPress={this.addInvoice}
                        style={styles.btn}
                        activeOpacity={0.5}>
                        <Text style={styles.btnTxt}>Create Invoice</Text>
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
        backgroundColor: '#F1F5FF',
    },
    backImage: {
        width: 100,
        height: 100,
    },
    title: {
        color: Colors.black,
        fontSize: 16,
        textDecorationLine: 'underline',
    },
    card: {
        flex: 0.6,
        flexDirection: 'column',
        width: 320,
        height: 100,
        backgroundColor: Colors.white,
        margin: 5,
        padding: 5,
        borderRadius: 15,
        elevation: 5,
        borderWidth: 1,
        borderColor: '#3F5E98',
    },
    cardRow: {
        flex: 1,
        flexDirection: 'row',
        padding: 5,
        // marginTop: 20,
    },
    cardColumn: {
        flex: 1,
        flexDirection: 'column',
    },
    txt: {
        color: 'gray',
        fontSize: 14,
        textAlign: 'left',
        padding: 5,
    },
    invoice: {
        alignSelf: 'center',
        width: 150,
        color: Colors.white,
        fontSize: 15,
        textAlign: 'center',
        padding: 5,
        backgroundColor: '#7F4AA4',
        borderRadius: 10,
    },
    form: {
        flex: 0.9,
        flexDirection: 'row',
        width: 330,
        backgroundColor: Colors.white,
        margin: 5,
        marginTop: 20,
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
        // fontWeight: "bold",
        color: 'black',
    },
    column: {
        // flex: 1,
        // flexDirection: 'column',
        // borderWidth: 4,
        // alignContent: 'center',
        // width: '50%'
    },
    btn: {
        elevation: 3,
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
        textAlign: 'center',
        fontWeight: 'bold'
    },
});
