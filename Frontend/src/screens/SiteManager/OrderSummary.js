/* eslint-disable prettier/prettier */
import axios from 'axios';
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Colors, Strings } from '../../constants';

export default class OrderSummaryScreen extends React.Component {
    static navigationOptions = {
        title: 'Order Summary',
    };

    constructor(props) {
        super(props);
        this.state = {
            orderDetails: {},
        };
        this.createOrder = this.createOrder.bind(this);
    }

    componentDidMount = () => {
        const { navigation } = this.props;
        const order_details = navigation.getParam('order_details');
        this.setState({ orderDetails: order_details });

    }

    /**
    * @description This method create new order
    * @memberof OrderSummaryScreen
    */
    createOrder() {
        var url = 'http://192.168.8.105:8080/order/createOrder';
        var data = {
            orderId: this.state.orderDetails.orderId,
            userId: this.state.orderDetails.userId,
            // siteName: this.state.orderDetails.siteName,
            // siteLocation: this.state.orderDetails.siteLocation,
            material: this.state.orderDetails.material,
            quantity: this.state.orderDetails.quantity,
            deadline: this.state.orderDetails.deadline,
            status: this.state.orderDetails.status,
        };
        axios.post(url, data)
            .then(response => {
                this.setState({
                    orderDetails: response.data,
                });
                Alert.alert(
                    Strings.modal_text.success,
                    'Your order has been placed successfully!!',
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
                    'Your order has been placed unsuccessfully!!',
                    [
                        { text: Strings.modal_text.check_again, onPress: () => this.props.navigation.navigate(Strings.screens.NewOrderScreen) },
                    ],
                    { cancelable: false },
                );
            });
    }

    render() {
        console.log('item details', this.state.orderDetails);
        return (
            <View style={styles.container}>
                <View style={styles.card}>
                    <ScrollView>
                        <Text style={[styles.btnTxt, styles.title]}>Order Details</Text>
                        {/* Row */}
                        <View style={styles.cardRow}>
                            {/* Column */}
                            <View style={styles.cardColumn}>
                                {/* <Text style={styles.txt}>Mgr. ID</Text> */}
                                {/* <Text style={styles.txt}>Site Name</Text> */}
                                <Text style={styles.txt}>Order ID</Text>
                                <Text style={styles.txt}>Material</Text>
                                <Text style={styles.txt}>Quantity</Text>
                                <Text style={styles.txt}>Deadline</Text>
                            </View>
                            {/* Column */}
                            <View style={styles.cardColumn}>
                                {/* <Text style={[styles.txt, { textAlign: 'center' }]}>:</Text> */}
                                {/* <Text style={[styles.txt, { textAlign: 'center' }]}>:</Text> */}
                                <Text style={[styles.txt, { textAlign: 'center' }]}>:</Text>
                                <Text style={[styles.txt, { textAlign: 'center' }]}>:</Text>
                                <Text style={[styles.txt, { textAlign: 'center' }]}>:</Text>
                                <Text style={[styles.txt, { textAlign: 'center' }]}>:</Text>
                            </View>
                            {/* Column */}
                            <View style={styles.cardColumn}>
                                {/* <Text style={[styles.txt, { textAlign: 'left' }]}>{this.state.orderDetails.userId}</Text> */}
                                {/* <Text style={[styles.txt, { textAlign: 'left' }]}>{this.state.orderDetails.siteName}</Text> */}
                                <Text style={[styles.txt, { textAlign: 'left', borderRadius: 10, backgroundColor: Colors.darkPurple, color: Colors.white }]}>#{this.state.orderDetails.orderId}</Text>
                                <Text style={[styles.txt, { textAlign: 'left' }]}>{this.state.orderDetails.material}</Text>
                                <Text style={[styles.txt, { textAlign: 'left' }]}>{this.state.orderDetails.quantity}</Text>
                                <Text style={[styles.txt, { textAlign: 'left', width: 200 }]}>{this.state.orderDetails.deadline}</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.column}>
                    <TouchableOpacity
                        onPress={this.createOrder}
                        style={styles.btn}
                        activeOpacity={0.5}>
                        <Text style={styles.btnTxt}>Create Order</Text>
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
        backgroundColor: Colors.darkWhite
    },
    title: {
        color: Colors.black,
        fontSize: 18,
        textDecorationLine: 'underline',
    },
    card: {
        flex: 0.4,
        flexDirection: 'row',
        width: 330,
        height: 50,
        backgroundColor: '#F1F5FF',
        margin: 10,
        padding: 20,
        borderRadius: 15,
        elevation: 5
    },
    cardRow: {
        flex: 1,
        flexDirection: 'row',
        padding: 5,
        marginTop: 10
    },
    cardColumn: {
        flex: 1,
        flexDirection: 'column',
    },
    txt: {
        color: 'gray',
        fontSize: 15,
        textAlign: 'left',
        padding: 5,
    },
    btn: {
        elevation: 5,
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
        color:Colors.black,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
