/* eslint-disable prettier/prettier */
import axios from 'axios';
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { Colors, Strings } from '../../constants';

export default class AllOrdersScreen extends React.Component {
    static navigationOptions = {
        title: 'Orders',
    };

    constructor(props) {
        super(props);
        this.state = {
            data: '',
            orders: [],
        };
        this.getOrders = this.getOrders.bind(this);
    }

    componentDidMount = () => {
        this.getOrders();
    }

    /**
     * @description This method get orders by user id
     * @memberof AllOrdersScreen
     */
    getOrders = () => {
        const { navigation } = this.props;
        const param = navigation.getParam('user_details');
        this.setState({
            data: param,
        });

        var url = `http://192.168.8.105:8080/order/getOrders/${param}`;
        axios.get(url)
            .then(response => {
                this.setState({ orders: response.data.data });
            })
            .catch(error => {
                console.log(error);
                alert(error.message);
            });
    }

    render() {
        console.log('orders', this.state.orders);
        console.log('user id', this.state.data);
        return (
            <View style={styles.container}>
                <ScrollView>
                    <FlatList
                        style={styles.notificationList}
                        data={this.state.orders}
                        keyExtractor={(item) => {
                            return item.id;
                        }}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.card}>
                                    <Text style={[styles.btnTxt, styles.title]}>Order Details</Text>
                                    {/* Row */}
                                    <View style={styles.cardRow}>
                                        {/* Column */}
                                        <View style={styles.cardColumn}>
                                            {/* <Text style={styles.txt}>Mgr. ID</Text> */}
                                            {/* <Text style={styles.txt}>Site Name</Text> */}
                                            <Text style={styles.txt}>Order Id</Text>
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
                                            {/* <Text style={[styles.txt, { textAlign: 'left' }]}>{item.userId}</Text> */}
                                            {/* <Text style={[styles.txt, { textAlign: 'left' }]}>{item.siteName}</Text> */}
                                            <Text style={[styles.txt, { textAlign: 'left', borderRadius: 10, backgroundColor: Colors.darkPurple, color: Colors.white, width: 100 }]}>#{item.orderId}</Text>
                                            <Text style={[styles.txt, { textAlign: 'left' }]}>{item.material}</Text>
                                            <Text style={[styles.txt, { textAlign: 'left' }]}>{item.quantity}</Text>
                                            <Text style={[styles.txt, { textAlign: 'left' }]}>{item.deadline}</Text>
                                            <TouchableOpacity >
                                                <Text
                                                    style={[item.status === Strings.approved ? styles.approve :
                                                        item.status === Strings.declined ? styles.decline : styles.pending]}>
                                                    {item.status}
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
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
        backgroundColor: '#F5F5F5',
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
    decline: {
        width: 100,
        color: Colors.white,
        fontSize: 15,
        textAlign: 'center',
        padding: 5,
        margin: 5,
        backgroundColor: '#D41930',
        borderRadius: 20,
    },
    approve: {
        width: 100,
        color: Colors.white,
        fontSize: 15,
        textAlign: 'center',
        padding: 5,
        margin: 5,
        backgroundColor: '#28A745',
        borderRadius: 20,
    },
    pending: {
        width: 100,
        color: Colors.white,
        fontSize: 14,
        textAlign: 'center',
        padding: 5,
        margin: 5,
        marginBottom: 5,
        backgroundColor: '#D4890E',
        borderRadius: 20,
    },
    btn: {
        elevation: 5,
        margin: 10,
        padding: 3,
        width: 160,
        marginRight: 5,
        backgroundColor: '#01949A',
        borderRadius: 20,
        alignSelf: 'center',
        alignItems: 'center',
    },
    btnTxt: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
    },
});
