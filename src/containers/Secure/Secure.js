import React,{Component} from 'react';
import {Text,View,ScrollView,Button} from 'react-native';

export default class Secure extends Component{
    render(){

        return( <ScrollView style={{padding: 20}}>
                <Text
                    style={{fontSize: 27}}>
                    Welcome to Kyazoonga
                </Text>

                <View style={{margin:7}} />
                <Button onPress={this.props.onLogoutPress} title="Logout" />


            </ScrollView>

        );}
}