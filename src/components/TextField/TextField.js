import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'

const TextField = props => (
    <View>
        <TextInput/>
        props.error ? <Text>{props.error}</Text> : null
    </View>
);

export default TextField