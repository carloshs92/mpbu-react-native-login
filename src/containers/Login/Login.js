import React,{Component} from 'react';
import {StyleSheet,View,TextInput,KeyboardAvoidingView,Button} from 'react-native';

export default class Login extends Component{
    render(){
        return(<KeyboardAvoidingView behavior="padding" style={styles.container} >
            <View style={styles.logoContainer} >
                <Text>Logo</Text>
            </View>
            <Text style={styles.titleText}> ¡Bienvenido! Por favor ingresa tu</Text>
            <Text style={styles.titleText}> correo y contraseña de UTP</Text>

            <TextInput style={styles.textInput} placeholder="Emaillllll" keyboardType="email-address" placeholderColor='#535c68' returnKeyType="next" />
            <TextInput style={styles.textInput} placeholder="Password" secureTextEntry returnKeyType="go" />
            <View style={styles.lgContainer}>
                <Button onPress={this.props.onLoginPress} title="submittttt">

                </Button>
            </View>
        </KeyboardAvoidingView>);
    }
}
const styles=StyleSheet.create({
    container:{
        padding:30
    },
    textInput:{
        height:40,
        color:'#696969',
        backgroundColor: '#f79c8d',
        marginBottom:20,
        paddingHorizontal:10,
        paddingBottom:20

    },
    lgContainer:{
        padding:20,
        alignItems:'center'
    }
});