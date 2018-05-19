import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Secure from '../Secure/Secure';
import Login from '../Login/Login';

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false};
    }

    drawView() {
        if (this.state.isLoggedIn)
            return <Secure onLogoutPress={() => this.setState({isLoggedIn: false})}/>;
        else
            return <Login onLoginPress={() => this.setState({isLoggedIn: true})}/>;
    }
    render() {
        return (
            <View style={styles.container} >
                <View style={styles.formContainer} >
                    {this.drawView()}
                </View>
            </View>
        )
    }
}


const styles= StyleSheet.create({
    container: {

    },
    logo: {
        width:400,
        height:200
    },
    logoContainer: {


    },
    titleText: {
        fontFamily: "raleway-extrabold",
        marginTop:18,
        fontSize:50,
        textAlign:'center',
        color:'#FFF',
    }

})