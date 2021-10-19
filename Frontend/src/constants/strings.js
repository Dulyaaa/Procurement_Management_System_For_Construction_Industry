/* eslint-disable prettier/prettier */
export const siteManger = 'Site Manager';
export const supplier = 'Supplier';

// Order status
export const approved = 'Approved';
export const declined = 'Declined';

// Delivery status
export const delivered = 'Delivered';
export const onDelivery = 'On Delivery';
export const processing = 'Processing';

// Screens
export const screens = {
    SplashScreen: 'SplashScreen',
    LogInScreen: 'LogInScreen',
    RegisterScreen: 'RegisterScreen',
    // Site Manager Screens
    SiteDashboardScreen: 'SiteDashboardScreen',
    NewOrderScreen: 'NewOrderScreen',
    OrderSummaryScreen: 'OrderSummaryScreen',
    AllOrdersScreen: 'AllOrdersScreen',
    NewPaymentScreen: 'NewPaymentScreen',
    AllDeliveryScreen: 'AllDeliveryScreen',
    // Supplier Screens
    SupplierDashboardScreen: 'SupplierDashboardScreen',
    AllQuotationsScreen: 'AllQuotationsScreen',
    AllInvoicesScreen: 'AllInvoicesScreen',
    NewInvoiceScreen: 'NewInvoiceScreen',
    NewDeliveryScreen: 'NewDeliveryScreen',
    PaymentScreen: 'PaymentScreen',
    DeliveryScreen: 'DeliveryScreen',
};

// Alert box texts
export const modal_text = {
    error: 'Error ❌',
    success: 'Success ✔',
    invalid_credentials: 'Enter valid credentials!!',
    check_again: 'Check Again?',
    email: 'Email Address',
    password: 'Password',
};

// Login text inputs
export const login_textInput = {
    employeeId: 'Employee ID',
    email: 'Email Address',
    password: 'Password',
};

// Order text inputs
export const order_textInput = {
    orderId: 'Order ID',
    quantity: 'Quantity',
    deadline: 'Deadline',
};
