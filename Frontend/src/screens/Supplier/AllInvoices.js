/* eslint-disable prettier/prettier */
import axios from 'axios';
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { Colors, Strings } from '../../constants';

export default class AllInvoicesScreen extends React.Component {
    static navigationOptions = {
        title: 'Invoices',
    };

    constructor(props) {
        super(props);
        this.state = {
            invoices: [],
        };
        this.getInvoices = this.getInvoices.bind(this);
    }

    componentDidMount = () => {
        this.getInvoices();
    }

    /**
    * @description This method get invoices by user id
    * @memberof AllInvoicesScreen
    */
    getInvoices = () => {
        var url = 'http://192.168.8.105:8080/invoice/';
        axios.get(url)
            .then(response => {
                this.setState({ invoices: response.data.data });
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
                        data={this.state.invoices}
                        keyExtractor={(item) => {
                            return item.id;
                        }}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.card}>
                                    <Text style={[styles.btnTxt, styles.title]}>Invoice Details</Text>
                                    {/* Row */}
                                    <View style={styles.cardRow}>
                                        {/* Column */}
                                        <View style={styles.cardColumn}>
                                            <Text style={styles.txt}>Order ID</Text>
                                            {/* <Text style={styles.txt}>Site Name</Text> */}
                                            {/* <Text style={styles.txt}>Location</Text> */}
                                            <Text style={styles.txt}>Material</Text>
                                            <Text style={styles.txt}>Quantity</Text>
                                            <Text style={styles.txt}>Unit Cost</Text>
                                            <Text style={styles.txt}>Total Cost</Text>
                                        </View>
                                        {/* Column */}
                                        <View style={styles.cardColumn}>
                                            {/* <Text style={[styles.txt, { textAlign: 'center' }]}>:</Text> */}
                                            {/* <Text style={[styles.txt, { textAlign: 'center' }]}>:</Text> */}
                                            <Text style={[styles.txt, { textAlign: 'center' }]}>:</Text>
                                            <Text style={[styles.txt, { textAlign: 'center' }]}>:</Text>
                                            <Text style={[styles.txt, { textAlign: 'center' }]}>:</Text>
                                            <Text style={[styles.txt, { textAlign: 'center' }]}>:</Text>
                                            <Text style={[styles.txt, { textAlign: 'center' }]}>:</Text>
                                        </View>
                                        {/* Column */}
                                        <View style={styles.cardColumn}>
                                            <Text style={[styles.txt, { textAlign: 'left', borderRadius: 10, backgroundColor: Colors.darkPurple, color: Colors.white, width: 100 }]}>#{item.orderId}</Text>
                                            {/* <Text style={[styles.txt, { textAlign: 'left' }]}>{item.siteName}</Text> */}
                                            {/* <Text style={[styles.txt, { textAlign: 'left' }]}>{item.siteLocation}</Text> */}
                                            <Text style={[styles.txt, { textAlign: 'left' }]}>{item.material}</Text>
                                            <Text style={[styles.txt, { textAlign: 'left' }]}>{item.quantity}</Text>
                                            <Text style={[styles.txt, { textAlign: 'left' }]}>Rs.{item.unitCost}</Text>
                                            <Text style={[styles.txt, { textAlign: 'left' }]}>Rs.{item.totalPrice}</Text>
                                            <TouchableOpacity >
                                                <Text style={[item.status ? styles.approve : styles.decline]}>{item.status ? Strings.approved : Strings.declined}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    {item.status === true &&
                                        <TouchableOpacity
                                            onPress={() => this.props.navigation.navigate('NewDeliveryScreen')}
                                        >
                                            <Text style={styles.invoice}>Add Delivery</Text>
                                        </TouchableOpacity>
                                    }
                                </View>
                            )
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
        backgroundColor: '#F2EEF7',
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
        backgroundColor: '#F5F5F5',
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
        // borderWidth: 2
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
    decline: {
        width: 100,
        color: Colors.white,
        fontSize: 14,
        textAlign: 'center',
        padding: 5,
        margin:5,
        backgroundColor: '#D41930',
        borderRadius: 20,
    },
    approve: {
        width: 100,
        color: Colors.white,
        fontSize: 14,
        textAlign: 'center',
        padding: 5,
        margin: 5,
        backgroundColor: '#28A745',
        borderRadius: 20,
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
    btn: {
        elevation: 5,
        margin: 10,
        padding: 3,
        width: 160,
        // height: 120,
        marginRight: 5,
        // height: 60
        backgroundColor: '#01949A',
        borderRadius: 20,
        // justifyContent:'center',
        alignSelf: 'center',
        alignItems: 'center',
    },
    btnTxt: {
        // padding: 5,
        color: 'white',
        fontSize: 15,
        // lineHeight: 60,
        // borderWidth: 2,
        textAlign: 'center',
    },
});
