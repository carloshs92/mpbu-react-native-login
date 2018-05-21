import React, { Component } from 'react'
import { View } from 'react-native'
import Secure from '../Secure/Secure';
import Login from '../Login/Login';

export default class Main extends Component {

    constructor() {
        super();
        this.state = {isLoggedIn: false};
    }

    drawView() {
        if (this.state.isLoggedIn) {
            return <Secure onLogoutPress={() => this.setState({isLoggedIn: false})}/>;
        }
        else {
            return <Login onLoginPress={() => this.setState({isLoggedIn: true})}/>;
        }
    }
    render() {
        return (
            <View>
                {this.drawView()}
            </View>
        )
    }
}
