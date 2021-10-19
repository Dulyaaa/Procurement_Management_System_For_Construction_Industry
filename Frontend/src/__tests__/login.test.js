/* eslint-disable prettier/prettier */
import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../screens/LogInScreen';

test('Login component renders correctly', () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('Should change state if userId is entered', () => {
    const instanceOf = renderer.create(<Login />).getInstance();
    instanceOf.onChangeUserId('Access');
    expect(instanceOf.state.userId).toEqual('Access');
});

it('Should change state if email is entered', () => {
    const instanceOf = renderer.create(<Login />).getInstance();
    instanceOf.onChangeEmail('Access');
    expect(instanceOf.state.email).toEqual('Access');
});

it('Should change state if password is entered', () => {
    const instanceOf = renderer.create(<Login />).getInstance();
    instanceOf.onChangePassword('Access');
    expect(instanceOf.state.password).toEqual('Access');
});
