import React from "react"
import {Text, View, TextInput, TouchableOpacity, StyleSheet, ScrollView} from "react-native"

const Cadastro = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View>
                    <Text style = {styles.labelText}>E-mail</Text>
                    <TextInput style = {styles.input} placeholder = "E-mail"></TextInput>
                </View>
                <View>
                    <Text style = {styles.labelText}>Senha</Text>
                    <TextInput style = {styles.input} placeholder = "Senha" secureTextEntry></TextInput>
                </View>
                <View>
                    <Text style = {styles.labelText}>Nome completo</Text>
                    <TextInput style = {styles.input} placeholder = "Nome completo"></TextInput>
                </View>
                <View>
                    <Text style = {styles.labelText}>Usuário</Text>
                    <TextInput style = {styles.input} placeholder = "Usuário"></TextInput>
                </View>
                <View>
                    <TouchableOpacity style = {styles.button}>
                        <Text style = {styles.texts}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 35
    },
    input: {
        width: 350,
        height: 45,
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        marginBottom: 20,
        borderRadius: 5
    },
    labelText: {
        fontSize: 18,
        marginBottom: 10
    },button: {
        backgroundColor: 'green',
        padding: 15,
        width: 350,
        height: 45,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    texts: {
        color: 'white'
    }
})

export default Cadastro;