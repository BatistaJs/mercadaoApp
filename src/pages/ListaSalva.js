import { View, Text, StyleSheet, Button } from 'react-native';
import React, { Component } from 'react';

const Third = () => (

    <View style={styles.View}>
        <Text style={styles.BemVindo}>Bem Vindo!!</Text>
    </View>

);


const styles = StyleSheet.create({

    View:
    {
        flex: 1,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center'

    },
    BemVindo:
    {
        fontSize: 20,
        color: '#ffffff'

    },

});
export default Third;