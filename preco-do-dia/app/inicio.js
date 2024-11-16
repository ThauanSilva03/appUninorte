import React from "react";
import { View, Text, StyleSheet, ViewBase } from "react-native";

const inicio = () => {
    return (
        <View style = {styles.container}>
            <View>
                <Text>Voce entrou no app!</Text>
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
    }
})

export default inicio;