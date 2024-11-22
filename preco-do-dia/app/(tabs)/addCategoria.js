import React from "react";
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from "react-native"

const addCategoria = () => {
    return (
        <View>
            <Text style = {styles.txt}>Nome *</Text>
            <TextInput
                placeholder = "Value"
                style = {styles.inputs}
            ></TextInput>
            <TouchableOpacity style = {styles.button}>
                <Text style={ styles.txtButton }>Salvar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    txt: {
        marginTop: 10,
        marginLeft: 15,
        marginBottom: 5,
        fontSize:18,
        color: '#1E1E1E'
    },
    txtButton: {
        color: '#F5F5F5',
        fontSize: 15
    },
    inputs: {
        width: 350,
        height: 45,
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        marginLeft: 15,
        borderRadius: 10,
        fontSize: 18,
        paddingLeft: 15
    },
    button: {
        width: 350,
        height: 40,
        borderRadius: 10,
        marginTop: 10,
        marginLeft: 15,
        color: '#F5F5F5',
        backgroundColor: '#14AE5C',
        alignItems: 'center',
        justifyContent: 'center'
    }
        
})

export default addCategoria;