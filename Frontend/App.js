/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Colors } from './src/constants'
import SplashScreen from './src/screens/SplashScreen';
import LogInScreen from './src/screens/LogInScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import SiteDashboardScreen from './src/screens/SiteManager/DashboardScreen';
import NewOrderScreen from './src/screens/SiteManager/NewOrder';
import OrderSummaryScreen from './src/screens/SiteManager/OrderSummary';
import AllOrdersScreen from './src/screens/SiteManager/AllOrders';
import AllDeliveryScreen from './src/screens/SiteManager/Delivery';
import SupplierDashboardScreen from './src/screens/Supplier/DashboardScreen';
import AllQuotationsScreen from './src/screens/Supplier/AllQuotations';
import AllInvoicesScreen from './src/screens/Supplier/AllInvoices';
import NewInvoiceScreen from './src/screens/Supplier/NewInvoice';
import NewPaymentScreen from './src/screens/SiteManager/NewPayment';
import NewDeliveryScreen from './src/screens/Supplier/NewDelivery';
import PaymentScreen from './src/screens/Supplier/Payment';
import DeliveryScreen from './src/screens/Supplier/AllDelivery';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: Colors.white,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    SplashScreen: { screen: SplashScreen },
    LogInScreen: { screen: LogInScreen },
    RegisterScreen: { screen: RegisterScreen },
    // Site Manager Screens
    SiteDashboardScreen: { screen: SiteDashboardScreen },
    NewOrderScreen: { screen: NewOrderScreen },
    OrderSummaryScreen: { screen: OrderSummaryScreen },
    AllOrdersScreen: { screen: AllOrdersScreen },
    NewPaymentScreen: { screen: NewPaymentScreen },
    AllDeliveryScreen: { screen: AllDeliveryScreen },
    // Supplier Screens
    SupplierDashboardScreen: { screen: SupplierDashboardScreen },
    AllQuotationsScreen: { screen: AllQuotationsScreen },
    AllInvoicesScreen: { screen: AllInvoicesScreen },
    NewInvoiceScreen: { screen: NewInvoiceScreen },
    NewDeliveryScreen: { screen: NewDeliveryScreen },
    PaymentScreen: { screen: PaymentScreen }, 
    DeliveryScreen: { screen: DeliveryScreen },
  },
  {
    defaultNavigationOptions: {
      headerTintColor: Colors.white,
      headerStyle: {
        backgroundColor: Colors.purple,
      },
    },
  },
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default createAppContainer(AppNavigator);
