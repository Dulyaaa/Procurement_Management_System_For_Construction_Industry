/* eslint-disable prettier/prettier */
import axios from 'axios';
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { Colors, Strings } from '../../constants';

export default class AllDeliveryScreen extends React.Component {
    static navigationOptions = {
        title: 'Delivery Details',
    };

    constructor(props) {
        super(props);
        this.state = {
            delivery: [],
        };
        this.getDelivery = this.getDelivery.bind(this);
    }

    componentDidMount = () => {
        this.getDelivery();
    }

    /**
     * @description This method get deliveries
     * @memberof AllDeliveryScreen
     */
    getDelivery = () => {

        var url = 'http://192.168.8.105:8080/delivery/';
        axios.get(url)
            .then(response => {
                this.setState({ delivery: response.data.data });
            })
            .catch(error => {
                console.log(error);
                alert(error.message);
            });
    }

    render() {
        console.log('delivery', this.state.delivery);
        return (
            <View style={styles.container}>
                <ScrollView>
                    <FlatList
                        style={styles.notificationList}
                        data={this.state.delivery}
                        keyExtractor={(item) => {
                            return item.id;
                        }}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.card}>
                                    <Text style={[styles.btnTxt, styles.title]}>Delivery Details</Text>
                                    {/* Row */}
                                    <View style={styles.cardRow}>
                                        {/* Column */}
                                        <View style={styles.cardColumn}>
                                            {/* <Text style={styles.txt}>Mgr. ID</Text> */}
                                            <Text style={styles.txt}>Delivery ID</Text>
                                            <Text style={styles.txt}>Order ID</Text>
                                            <Text style={[styles.txt, { width: 200}]}>Delivery Person</Text>
                                            <Text style={[styles.txt, { width: 200 }]}>Phone Number</Text>
                                            <Text style={styles.txt}>Amount</Text>
                                        </View>
                                        {/* Column */}
                                        <View style={styles.cardColumn}>
                                            {/* <Text style={[styles.txt, { textAlign: 'center' }]}>:</Text> */}
                                            <Text style={[styles.txt, { textAlign: 'center' }]}>:</Text>
                                            <Text style={[styles.txt, { textAlign: 'center' }]}>:</Text>
                                            <Text style={[styles.txt, { textAlign: 'center' }]}>:</Text>
                                            <Text style={[styles.txt, { textAlign: 'center' }]}>:</Text>
                                            <Text style={[styles.txt, { textAlign: 'center' }]}>:</Text>
                                            {/* <Text style={[styles.txt, { textAlign: 'center' }]}>:</Text> */}
                                        </View>
                                        {/* Column */}
                                        <View style={styles.cardColumn}>
                                            {/* <Text style={[styles.txt, { textAlign: 'left' }]}>{item.userId}</Text> */}
                                            <Text style={[styles.txt, { textAlign: 'left' }]}>#{item.deliveryId}</Text>
                                            <Text style={[styles.txt, { textAlign: 'left', borderRadius: 10, backgroundColor: Colors.darkPurple, color: Colors.white, width: 100 }]}>#{item.orderId}</Text>
                                            <Text style={[styles.txt, { textAlign: 'left', width: 200 }]}>{item.deliveryPerson}</Text>
                                            <Text style={[styles.txt, { textAlign: 'left', width: 200 }]}>{item.deliveryPhone}</Text>
                                            <Text style={[styles.txt, { textAlign: 'left', width: 200 }]}>Rs.{item.amount}/=</Text>
                                            <TouchableOpacity >
                                                <Text
                                                    style={[item.status === Strings.delivered ? styles.delivered :
                                                        item.status === Strings.onDelivery ? styles.onDelivery : styles.processing]}>
                                                    {item.status}
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <TouchableOpacity
                                        onPress={() => this.props.navigation.navigate(Strings.screens.NewPaymentScreen)}
                                    >
                                        <Text style={styles.invoice}>Make A Payment</Text>
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
        backgroundColor: Colors.white,
        margin: 10,
        padding: 20,
        borderRadius: 15,
        elevation: 5,
        // borderWidth: 1,
        // borderColor: '#3F5E98',
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
    onDelivery: {
        width: 100,
        color: Colors.white,
        fontSize: 14,
        textAlign: 'center',
        padding: 5,
        margin: 5,
        backgroundColor: '#D4890E',
        borderRadius: 20,
    },
    delivered: {
        width: 100,
        color: Colors.white,
        fontSize: 14,
        textAlign: 'center',
        padding: 5,
        margin: 5,
        backgroundColor: '#28A745',
        borderRadius: 20,
    },
    processing: {
        width: 100,
        color: Colors.white,
        fontSize: 14,
        textAlign: 'center',
        padding: 5,
        margin: 5,
        backgroundColor: '#0AE',
        borderRadius: 20,
    },
    btn: {
        elevation: 5,
        margin: 10,
        padding: 3,
        width: 160,
        marginRight: 5,
        marginBottom: 5,
        backgroundColor: '#01949A',
        borderRadius: 20,
        alignSelf: 'center',
        alignItems: 'center',
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
        color: Colors.white,
        fontSize: 15,
        textAlign: 'center',
    },
});
