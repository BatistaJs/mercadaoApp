import { View, TouchableOpacity, Image, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerNavigatorItems } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
// importando as pages
import Home from './pages/Home';
import Mercados from './pages/mercados';
import ListaSalva from './pages/ListaSalva';
import Merca1 from './pages/Mercado 1'


class Estrutura extends Component {
    //estrutura para a nevegação drawer
    toggleDrawer = () => {
        //props para open e close
        this.props.navigationProps.toggleDrawer();
    };

    render() {
        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
                    {}
                    <Image
                        source={require('./images/drawer.png')}
                        style={{ width: 25, height: 25, marginLeft: 5 }}></Image>
                </TouchableOpacity>

            </View>
        )
    }
}

const CustomDrawerComponent = props => (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.Drawer}>
            <Image source={require('./images/iconeCesta.png')}
                style={{ height: 100, width: 100 }}
            ></Image>
        </View>
        <ScrollView>
            <DrawerNavigatorItems {...props}>

            </DrawerNavigatorItems>
        </ScrollView>
    </SafeAreaView >
)

const FirtActivity = createStackNavigator({
    // todas as telas aqui

    First:
    {
        screen: Home,// nome dado a constante na pg
        navigationOptions: ({ navigation }) => ({
            title: 'Home',
            headerLeft: <Estrutura navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#FF9800',
            },
            headerTintColor: '#fff'

        }),

    },
});

const Tela2 = createStackNavigator({
    Second:
    {
        screen: Mercados,
        navigationOptions: ({ navigation }) => ({
            title: 'Mercados',
            headerLeft: <Estrutura navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#FF9800',
            },
            headerTintColor: '#fff'
        }),
    },
});

const Listas = createStackNavigator({ // mesmo nome no DrawerNavigator
    Third:
    {
        screen: ListaSalva,
        navigationOptions: ({ navigation }) => ({
            title: 'Listas Salvas',
            headerLeft: <Estrutura navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#FF9800'
            },
            headerTintColor: '#fff'
        }),
    },

});


const Mercado1 = createStackNavigator({ // mesmo nome no DrawerNavigator
    MercadoUm:
    {
        screen: Merca1,
        navigationOptions: ({ navigation }) => ({
            title: 'Mercado 1 ',
            headerLeft: <Estrutura navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#FF9800'
            },
            headerTintColor: '#fff'
        }),
    },

});

const DrawerNavigator = createDrawerNavigator({
    Home:
    {
        screen: FirtActivity,
        navigationOptions: {
            drawerLabel: 'Home'
        },
    },
    Mercados:
    {
        screen: Tela2,
        navigationOptions: {
            drawerLabel: 'Mercados'
        },
    },
    ListaSalva:
    {
        screen: Listas,
        navigationOptions: {
            drawerLabel: 'Listas Salvas'
        }
    },
    Merca1: // aqui vai ficar a lista do mercado 1 / aqui é pra colacar na aba certo?
    {
        screen: Mercado1,
        navigationOptions:
        {
            drawerLabel: 'Mercadao 1'
        }
    }
},
    {
        contentComponent: CustomDrawerComponent
    }
);

const styles = StyleSheet.create({
    Drawer:
    {
        height: 150,
        backgroundColor: '#FF9800',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
const Rota = createAppContainer(DrawerNavigator);

export default Rota;