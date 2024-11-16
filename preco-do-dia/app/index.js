import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";

const Home = () => {

    const entrar = () => {
        router.navigate('inicio');
    }

    return (
        <View style={styles.container}>
            <View>
                <Text>Ola Mundo!</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={entrar}>
                    <Text style = {styles.textButton}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: 'green',
        padding: 15,
        width: 100,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    textButton: {
        color: 'white'
    }
})

export default Home;