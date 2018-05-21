import React,{Component} from 'react';
import {
    StyleSheet
    , View
    , KeyboardAvoidingView
    , Text
} from 'react-native';
import { FormInput, Button, Icon } from 'react-native-elements';

// https://stackoverflow.com/questions/40935381/how-can-i-put-an-icon-inside-a-textinput-in-react-native

export default class Login extends Component{
    render(){
        return(
        <View style={{'width': 300}}>
            <View style={styles.logoContainer} >
                <Text>Logo</Text>
                <Text style={styles.titleText}> ¡Bienvenido! Por favor ingresa tu</Text>
                <Text style={styles.titleText}> correo y contraseña de UTP</Text>
            </View>
            <KeyboardAvoidingView>
                <Icon style={styles.inputIcon} name="lock" size={20} color="#fff" type='feather'/>
                <Icon style={styles.inputIcon} name="user" size={20} color="#fff" type='feather'/>
                <FormInput placeholder={"Tu correo UTP"}
                           inputStyle={styles.inputBox}
                           returnKeyType="next"
                           placeholderTextColor="#fff"
                           underlineColorAndroid="rgba(0,0,0,0)"/>
                <FormInput placeholder={"Tu contraseña"}
                           inputStyle={styles.inputBox}
                           secureTextEntry={true}
                           returnKeyType="go"
                           placeholderTextColor="#fff"
                           underlineColorAndroid="rgba(0,0,0,0)"
                           inlineImageLeft='lock'/>
                <Button title="INGRESAR" buttonStyle={styles.buttonBox} textStyle={styles.buttonText}>

                </Button>
            </KeyboardAvoidingView>
        </View>);
    }
}
const styles=StyleSheet.create({
    titleText:{
        fontSize: 16,
        fontFamily: "raleway-extrabold",
        textAlign: 'center',
        color: "#fff"
    },
    inputBox:{
        marginTop: 12,
        marginBottom: 12,
        paddingHorizontal: 25,
        paddingVertical: 13,
        borderRadius:50,
        width: '100%',
        backgroundColor: '#f79c8d',
        borderColor: "transparent",
        borderWidth: 0,
        color: '#fff',
        fontSize: 16,
        fontFamily: "raleway-medium",

    },
    buttonBox: {
        marginTop: 12,
        marginBottom: 12,
        paddingHorizontal: 25,
        paddingVertical: 13,
        borderRadius:50,
        backgroundColor:'#fff'
    },
    buttonText: {
        color: '#f79c8d',
        fontSize: 16,
        fontFamily: "raleway-extrabold",
    },
    logoContainer:{
        marginTop: 50,
        marginBottom: 30,
        alignItems:'center'
    },
    inputIcon: {
        padding: 10,
        color: 'white'
    }
});