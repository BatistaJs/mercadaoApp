
import { View, StyleSheet, Button, ScrollView, FlatList, SafeAreaView, Text } from 'react-native';
import React from 'react';
import { FloatingAction } from "react-native-floating-action";

const Second = ({ navigation }) => (
    <View style={styles.principal}>
        <ScrollView >
            <View style={styles.Viewbotoes}>
                <Button onPress={() => navigation.navigate('Mercado1')}
                    title='Mercado1' color='#FFBF00' ></Button>
                <Button onPress={() => navigation.navigate('Mercado2')}
                    title='Mercado2' color='#0000FF'></Button>
                <Button onPress={() => navigation.navigate('Mercado3')}
                    title='Mercado3' color='#FF0000'></Button>
                <Button onPress={() => navigation.navigate('Mercado4')}
                    title='Mercado4' color='#00FF00'></Button>
                <Button onPress={() => navigation.navigate('Mercado5')}
                    title='Mercado5' color='#FF00FF'></Button>
            </View>
        </ScrollView>
        <FloatingAction actions={actions} color='#FF9800'> </FloatingAction>

    </View>


);
const actions = [
    {
        text: 'Salvar',
        icon: require("./../images/botao-salvar.png"),
        name: "bt-salvar",
        position: 1,
        color: '#FFBF00'
    }
];

const styles = StyleSheet.create({

    Viewbotoes:
    {
        // flexDirection: 'column',
        marginTop: 5


    },
    principal:
    {
        flex: 1,
        backgroundColor: '#000'
    },
    ActionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
    botoes:
    {
        height: 25
    }
});
export default Second;