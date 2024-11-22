import React from "react";
import {View, Text, TextInput, StyleSheet} from "react-native"

const addCategoria = () => {
    return (
        <View>
            <Text>Nome*</Text>
            <TextInput
                placeholder = "Value"
                style = {styles.inputs}
            ></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    inputs: {
        width: 350,
        height: 45,
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        marginBottom: 20,
        borderRadius: 5
    }
})

export default addCategoria;