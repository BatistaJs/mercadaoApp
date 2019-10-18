import { View, Text, StyleSheet, Button } from 'react-native';
import React, { Component } from 'react';

const MercadoUm = ({ navigation }) => (

    <View style={styles.View}>
        <Text style={styles.BemVindo}>Listas dos produtos</Text>

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
    Mercadao:
    {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FF9800'
    },
    botaoView:
    {
        alignItems: 'stretch'
    },

    textsuper:
    {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFBF00',
        alignItems: 'baseline'
    }


});
export default MercadoUm;

