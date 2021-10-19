/* eslint-disable prettier/prettier */
import axios from 'axios';
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { Colors, Strings } from '../../constants';

const initialState = {
    quotations: [],
};

export default class AllQuotationsScreen extends React.Component {
    static navigationOptions = {
        title: 'Quotations',
    };

    constructor(props) {
        super(props);
        this.state = initialState;
        this.getQuotations = this.getQuotations.bind(this);
    }

    componentDidMount = () => {
        this.getQuotations();
    }

    /**
    * @description This method get quotations by user id
    * @memberof AllQuotationsScreen
    */
    getQuotations = () => {
        var url = 'http://192.168.8.105:8080/quotation/';
        axios.get(url)
            .then(response => {
                this.setState({ quotations: response.data.data });
            })
            .catch(error => {
                alert(error.message);
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <FlatList
                        style={styles.notificationList}
                        data={this.state.quotations}
                        keyExtractor={(item) => {
                            return item.id;
                        }}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.card}>
                                    <Text style={[styles.btnTxt, styles.title]}>Quotation Details</Text>
                                    {/* Row */}
                                    <View style={styles.cardRow}>
                                        {/* Column */}
                                        <View style={styles.cardColumn}>
                                            <Text style={[styles.txt, { width: 200 }]}>Quotation ID</Text>
                                            <Text style={styles.txt}>Order ID</Text>
                                            {/* <Text style={styles.txt}>Estimated Amount</Text> */}
                                            <Text style={styles.txt}>Date From</Text>
                                            <Text style={styles.txt}>Date To</Text>
                                            <Text style={styles.txt}>Material</Text>
                                            <Text style={styles.txt}>Quantity</Text>
                                        </View>
                                        {/* Column */}
                                        <View style={styles.cardColumn}>
                                            <Text style={[styles.txt, { textAlign: 'center' }]}>:</Text>
                                            <Text style={[styles.txt, { textAlign: 'center' }]}>:</Text>
                                            {/* <Text style={[styles.txt, { textAlign: 'center' }]}>:</Text> */}
                                            <Text style={[styles.txt, { textAlign: 'center' }]}>:</Text>
                                            <Text style={[styles.txt, { textAlign: 'center' }]}>:</Text>
                                            <Text style={[styles.txt, { textAlign: 'center' }]}>:</Text>
                                            <Text style={[styles.txt, { textAlign: 'center' }]}>:</Text>
                                            {/* <Text style={[styles.txt, { textAlign: 'center' }]}>:</Text> */}
                                        </View>
                                        {/* Column */}
                                        <View style={styles.cardColumn}>
                                            <Text style={[styles.txt, { textAlign: 'left' }]}>#{item.quotationId}</Text>
                                            <Text style={[styles.txt, { textAlign: 'left', borderRadius: 10, backgroundColor: Colors.darkPurple, color: Colors.white, width: 100 }]}>#{item.orderId}</Text>
                                            {/* <Text style={[styles.txt, { textAlign: 'left' }]}>{item.estimatedAmount}</Text> */}
                                            <Text style={[styles.txt, { textAlign: 'left', width: 200 }]}>{item.dateFrom}</Text>
                                            <Text style={[styles.txt, { textAlign: 'left', width: 200 }]}>{item.dateTo}</Text>
                                            <Text style={[styles.txt, { textAlign: 'left' }]}>{item.material}</Text>
                                            <Text style={[styles.txt, { textAlign: 'left' }]}>{item.quantity}</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity
                                        onPress={() => this.props.navigation.navigate(Strings.screens.NewInvoiceScreen, { order_id: item })}
                                    >
                                        <Text style={styles.invoice}>Create Invoice</Text>
                                    </TouchableOpacity>
                                </View>
                            );
                        }}
                    />
                </ScrollView>
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
    notificationList: {
        margin: 0,
        padding: 5,
    },
    title: {
        color: Colors.black,
        fontSize: 18,
        textDecorationLine: 'underline',
    },
    card: {
        flex: 1,
        flexDirection: 'column',
        width: 320,
        backgroundColor: Colors.white,
        margin: 10,
        padding: 20,
        borderRadius: 15,
        elevation: 5,
    },
    cardRow: {
        flex: 1,
        flexDirection: 'row',
        padding: 5,
        marginTop: 20,
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
    invoice: {
        alignSelf: 'center',
        width: 150,
        color: Colors.black,
        fontSize: 15,
        textAlign: 'center',
        padding: 5,
        backgroundColor: Colors.yellow,
        borderRadius: 10,
        elevation: 2
    },
    btnTxt: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
    },
});