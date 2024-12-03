import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Image, TextInput} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import useAuthStore from '../store/authStore'


const editarPerfil = () => {
    const {usuario, img} = useAuthStore();

    return (
        <View style = {styles.container}>
            
            <View style = {styles.backgroundFoto}>
                <View style = {styles.foto}>
                    <Image
                        source={{ uri: img }}
                        style={styles.image}
                        resizeMode="cover"
                    />
                </View>
                <Text style = {styles.nome}>{usuario.charAt(0).toUpperCase()+usuario.slice(1)}</Text>
            </View>
            <Text style={styles.title}>Nome *</Text>
            <TextInput placeholder="Value" style={styles.input} />
            <Text style={styles.title}>E-mail</Text>
            <TextInput placeholder="Value" style={styles.input} />
            <Text style={styles.title}>CPF</Text>
            <TextInput placeholder="Value" style={styles.input} />
            <Text style={styles.title}>Senha</Text>
            <TextInput placeholder="Value" style={styles.input} />
            <Text style={styles.title}>Telefone</Text>
            <View style={styles.pickerContainer}>
                <Picker placeholder="Value"></Picker>
            </View>
            <TouchableOpacity style={styles.button} >
                <Text style={styles.txtButton}>Salvar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        marginLeft: 15,
        marginTop: 10
    },
    backgroundFoto: {
        backgroundColor: "#14AE5C",
        height: 220,
        justifyContent: 'center',
        alignItems: 'center'
    },
    foto: {
        backgroundColor: '#fff',
        width: 100,
        height: 100,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    nome: {
        color: '#fff',
        paddingTop: 20,
        fontSize: 25
    },
    image: {
        width: 90,
        height: 90
    },
    input: {
        width: 350,
        height: 45,
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        borderRadius: 5,
        marginLeft: 15,
        borderRadius: 10,
        fontSize: 15,
        paddingLeft: 15
      },
      button: {
        width: 350,
        height: 40,
        borderRadius: 10,
        marginTop: 15,
        marginLeft: 15,
        color: '#F5F5F5',
        backgroundColor: '#14AE5C',
        alignItems: 'center',
        justifyContent: 'center'
    },txtButton: {
        color: '#F5F5F5',
        fontSize: 15
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        width: 350,
        marginLeft: 15
    }
})

export default editarPerfil;
