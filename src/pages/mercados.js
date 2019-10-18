import React, { Component } from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    Image,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'


const Second = ({ navigation }) => (
    <View style={styles.container}>
        <ScrollView>
            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Merca1')}
                    style={styles.button} >
                    <Image
                        style={styles.images}
                        source={require('./../images/Quartetto.jpg')}
                    ></Image>
                </TouchableOpacity >
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Mercado 2')} >
                    <Image
                        style={styles.images}
                        source={require('./../images/catarinense.jpeg')}
                    ></Image>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Mercado 3')} >
                    <Image
                        style={styles.images}
                        source={require('./../images/mega.jpeg')}
                    ></Image>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Mercado 4')} >
                    <Image
                        style={styles.images}
                        source={require('./../images/Quartetto.jpg')}
                    ></Image>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Mercado 5')} >
                    <Image
                        style={styles.images}
                        source={require('./../images/Quartetto.jpg')}
                    ></Image>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Mercado 6')} >
                    <Image
                        style={styles.images}
                        source={require('./../images/Quartetto.jpg')}
                    ></Image>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </View>

)

const actions = [
    {
        text: 'Salvar',
        icon: require('./../images/botao-salvar.png'),
        name: "bt-salvar",
        position: 1,
        color: '#FFBF00'
    }
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        paddingHorizontal: 10,
        backgroundColor: '#000000'
    },
    button: {
        alignItems: 'center',
        // backgroundColor: '#FF9800',
        padding: 10,

    },
    countContainer: {
        alignItems: 'center',
        padding: 10
    },
    countText: {
        color: '#FF00FF'
    },
    images:
    {
        height: 110
    }
});
export default Second;
