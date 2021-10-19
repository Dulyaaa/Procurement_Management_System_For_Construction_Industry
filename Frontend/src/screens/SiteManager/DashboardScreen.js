/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Colors, Strings } from '../../constants';

export default class SiteDashboardScreen extends React.Component {
    static navigationOptions = {
        title: 'Site Dashboard',
        headerShown: false,
    };

    constructor(props) {
        super(props);
        this.state = {
            data: '',
        };
        this.getDetails = this.getDetails.bind(this);
    }

    componentDidMount = () => {
        this.getDetails();
    }

    getDetails = () => {
        const { navigation } = this.props;
        const param = navigation.getParam('user_details');
        this.setState({
            data: param,
        });
    };

    render() {
        console.log("sjnvk", this.state.data)
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, flexDirection: 'row', width: '100%', }}>
                    <Image
                        style={styles.backImage}
                        source={require('../../../images/site.png')} />
                </View>
                <Text style={[styles.btnTxt, { color: '#0C1446', marginTop: -90, marginBottom: 40, fontSize: 26, fontWeight: 'bold' }]}>Site Manager Dashboard</Text>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate(Strings.screens.NewOrderScreen, { user_details: this.state.data })}
                            style={styles.btn}
                            activeOpacity={0.5}>
                            <Image
                                style={{ width: 70, height: 70 }}
                                source={require('../../../images/materials.png')} />
                            <Text style={styles.btnTxt}>New Order</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.column}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate(Strings.screens.AllOrdersScreen, { user_details: this.state.data })}
                            style={styles.btn}
                            activeOpacity={0.5}>
                            <Image
                                style={{ width: 70, height: 70 }}
                                source={require('../../../images/checklist.png')} />
                            <Text style={styles.btnTxt}>Orders</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate(Strings.screens.AllDeliveryScreen)}
                            style={styles.btn}
                            activeOpacity={0.5}>
                            <Image
                                style={{ width: 70, height: 70 }}
                                source={require('../../../images/delivery.png')} />
                            <Text style={styles.btnTxt}>Delivery</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        backgroundColor: Colors.darkWhite,
    },
    backImage: {
        width: '100%',
        height: '70%',
    },
    row: {
        flex: 0.5,
        flexDirection: 'row',
    },
    column: {
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
    },
    btn: {
        elevation: 10,
        margin: 10,
        padding: 5,
        width: 150,
        height: 120,
        marginRight: 5,
        backgroundColor: Colors.darkPurple,
        borderRadius: 20,
        alignSelf: 'center',
        alignItems: 'center'
    },
    btnTxt: {
        padding: 5,
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
});
