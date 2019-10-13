import { View, Text, StyleSheet, Button } from 'react-native';
import React, { Component } from 'react';

const Home = ({ navigation }) => (

    <View style={styles.View}>
        <Text style={styles.BemVindo}>Bem Vindo!!</Text>
        <Text style={styles.textsuper}>super</Text>
        <Text style={styles.Mercadao}>MERCADÃO</Text>
        <Text style={styles.mensagem}> Faça sua lista e boas compras!!</Text>
        <View style={styles.botaoView}>
            <Button onPress={() => navigation.navigate('Mercados')}
                title='Ir para a Lista'
                color='#FF9800'
                style={styles.botaoView}
            ></Button>
        </View>


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
export default Home;