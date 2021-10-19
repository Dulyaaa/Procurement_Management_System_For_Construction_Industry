/* eslint-disable prettier/prettier */
import React from 'react';
import renderer from 'react-test-renderer';
import Register from '../screens/RegisterScreen';

test('Register component renders correctly', () => {
    const tree = renderer.create(<Register />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('Should change state if userId is entered', () => {
    const instanceOf = renderer.create(<Register />).getInstance();
    instanceOf.onChangeUserId('Access');
    expect(instanceOf.state.userId).toEqual('Access');
});

it('Should change state if name is entered', () => {
    const instanceOf = renderer.create(<Register />).getInstance();
    instanceOf.onChangeName('Access');
    expect(instanceOf.state.name).toEqual('Access');
});

it('Should change state if email is entered', () => {
    const instanceOf = renderer.create(<Register />).getInstance();
    instanceOf.onChangeEmail('Access');
    expect(instanceOf.state.email).toEqual('Access');
});

it('Should change state if password is entered', () => {
    const instanceOf = renderer.create(<Register />).getInstance();
    instanceOf.onChangePassword('Access');
    expect(instanceOf.state.password).toEqual('Access');
}); 

it('Should change state if role is entered', () => {
    const instanceOf = renderer.create(<Register />).getInstance();
    instanceOf.onChangeRole('Access');
    expect(instanceOf.state.role).toEqual('Access');
});
