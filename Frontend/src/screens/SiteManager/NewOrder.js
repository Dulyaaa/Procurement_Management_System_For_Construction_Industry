/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Input } from 'react-native-elements';
import { Colors, Strings } from '../../constants';

const initialState = {
    data: '',
    orderId: '',
    siteName: '',
    siteLocation: '',
    material: null,
    quantity: '',
    deadline: '',
    status: false,
    open: false,
    value: null,
    items: [
        { label: 'Cement', value: 'cement' },
        { label: 'Timber', value: 'timber' },
        { label: 'Sand', value: 'sand' },
        { label: 'Wood', value: 'wood' },
        { label: 'Steel', value: 'steel' },
        { label: 'Glass', value: 'glass' },
        { label: 'Bricks', value: 'bricks' },
    ],
};

export default class NewOrderScreen extends React.Component {
    static navigationOptions = {
        title: 'New Order',
    };

    constructor(props) {
        super(props);
        this.state = initialState;
        this.getDetails = this.getDetails.bind(this);
        this.setOpen = this.setOpen.bind(this);
        this.setItems = this.setItems.bind(this);
        this.onChangeOrderId = this.onChangeOrderId.bind(this);
        this.onChangeSiteName = this.onChangeSiteName.bind(this);
        this.onChangeSiteLocation = this.onChangeSiteLocation.bind(this);
        this.onChangeMaterial = this.onChangeMaterial.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onChangeDeadline = this.onChangeDeadline.bind(this);
    }

    componentDidMount = () => {
        this.getDetails();
    }

    /**
    * @description This method gets the details
    * @memberof NewOrderScreen
    */
    getDetails = () => {
        const { navigation } = this.props;
        const param = navigation.getParam('user_details');
        this.setState({
            data: param,
        });
    };

    /**
    * @description This method set the items for dropdown
    * @param {Function} callback
    * @memberof NewOrderScreen
    */
    setItems(callback) {
        this.setState(state => ({
            items: callback(state.items),
        }));
    }

    /**
    * @description This method opens the dropdown
    * @param {Function} open
    * @memberof NewOrderScreen
    */
    setOpen(open) {
        this.setState({ open });
    }

    /**
    * @description This method changes the value of material
    * @param {Function} callback
    * @memberof NewOrderScreen
    */
    onChangeMaterial(callback) {
        this.setState(state => ({
            material: callback(state.material),
        }));
    }

    /**
     * @description This method changes the value of orderId
     * @param {Object} e
     * @memberof NewOrderScreen
     */
    onChangeOrderId = (e) => {
        this.setState({ orderId: e });
    }

    /**
    * @description This method changes the value of siteName
    * @param {Object} e
    * @memberof NewOrderScreen
    */
    onChangeSiteName = (e) => {
        this.setState({ siteName: e });
    }

    /**
    * @description This method changes the value of siteLocation
    * @param {Object} e
    * @memberof NewOrderScreen
    */
    onChangeSiteLocation = (e) => {
        this.setState({ siteLocation: e });
    }

    /**
    * @description This method changes the value of quantity
    * @param {Object} e
    * @memberof NewOrderScreen
    */
    onChangeQuantity = (e) => {
        this.setState({ quantity: e });
    }

    /**
    * @description This method changes the value of deadline
    * @param {Object} e
    * @memberof NewOrderScreen
    */
    onChangeDeadline = (e) => {
        this.setState({ deadline: e });
    }

    /**
    * @description This method pass the details and navigate to the summary screen
    * @param {Object} e
    * @memberof NewOrderScreen
    */
    viewSummary = () => {
        const orderDetails = {
            userId: this.state.data,
            orderId: this.state.orderId,
            // siteName: this.state.siteName,
            // siteLocation: this.state.siteLocation,
            material: this.state.material,
            quantity: this.state.quantity,
            deadline: this.state.deadline,
            status: 'Pending',
        };
        console.log('order details', orderDetails);
        this.props.navigation.navigate(Strings.screens.OrderSummaryScreen, { order_details: orderDetails });
    }

    render() {
        console.log("jdnjd", this.state.data)
        const { open, items } = this.state;
        return (
            <View style={styles.container}>
                <Image
                    style={styles.backImage}
                    source={require('../../../images/materials.png')} />

                <View style={styles.form}>
                    <ScrollView>
                        <Input
                            value={this.state.orderId}
                            label={Strings.order_textInput.orderId}
                            labelStyle={styles.label}
                            inputContainerStyle={styles.inputContainer}
                            inputStyle={styles.input}
                            onChangeText={this.onChangeOrderId}
                        // placeholder='Enter Site Name'
                        />
                        {/* <Input
                            value={this.state.siteName}
                            label="Site Name"
                            labelStyle={styles.label}
                            inputContainerStyle={styles.inputContainer}
                            inputStyle={styles.input}
                            onChangeText={this.onChangeSiteName}
                        /> */}
                        {/* <Input
                            value={this.state.siteLocation}
                            label="Location"
                            labelStyle={styles.label}
                            inputContainerStyle={styles.inputContainer}
                            inputStyle={styles.input}
                            onChangeText={this.onChangeSiteLocation}
                        /> */}
                        <DropDownPicker
                            // multiple={true}
                            style={styles.dropDownStyle}
                            textStyle={styles.dropDownText}
                            labelStyle={styles.dropDownLabel}
                            open={open}
                            value={this.state.material}
                            items={items}
                            setOpen={this.setOpen}
                            setValue={this.onChangeMaterial}
                            setItems={this.setItems}
                        />
                        <Input
                            value={this.state.quantity}
                            label={Strings.order_textInput.quantity}
                            labelStyle={styles.label}
                            inputContainerStyle={styles.inputContainer}
                            inputStyle={styles.input}
                            onChangeText={this.onChangeQuantity}
                        />
                        <Input
                            value={this.state.deadline}
                            label={Strings.order_textInput.deadline}
                            labelStyle={styles.label}
                            inputContainerStyle={styles.inputContainer}
                            inputStyle={styles.input}
                            onChangeText={this.onChangeDeadline}
                        />
                        <View style={styles.column}>
                            <TouchableOpacity
                                onPress={this.viewSummary}
                                style={styles.btn}
                                activeOpacity={0.5}>
                                <Text style={styles.btnTxt}>View Summary</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
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
        textAlign: 'center',
    },
});
