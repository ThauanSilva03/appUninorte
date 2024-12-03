import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native'
import useAuthStore from '../../store/authStore'
import { router } from 'expo-router';


const Perfil = () => {
    const {usuario, img} = useAuthStore();

    const editar = () => {
        router.navigate("editarPerfil");
    }

    return (
        <View style = {styles.container}>
            
            <View style = {styles.backgroundFoto}>
                <View style = {styles.foto}>
                    <Image
                        source={{ uri: img }}
                        style={styles.image}
                        resizeMode="cover" // Ajusta como a imagem será exibida
                    />
                </View>
                <Text style = {styles.nome}>{usuario.charAt(0).toUpperCase()+usuario.slice(1)}</Text>
            </View>
            
            <TouchableOpacity style = {styles.button} onPress={editar}>
                <View style={styles.options}>
                    <Image source = {require('../../assets/images/user-check.png')} style = {styles.icon}/>
                    <View>
                        <Text style={styles.title}>Editar Perfil</Text>
                        <Text>Email, segurança, mudar número</Text>
                        <View style={styles.hr}/>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button}>
                <View style={styles.options}>
                    <Image source = {require('../../assets/images/bell.png')} style = {styles.icon}/>
                    <View>
                        <Text style={styles.title}>Notificações</Text>
                        <Text>Ativar ou desativar notificações</Text>
                        <View style={styles.hr}/>
                    </View>            
                </View>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button}>
                <View style={styles.options}>
                    <Image source = {require('../../assets/images/trash.png')} style = {styles.icon}/>
                    <View>
                        <Text style={styles.title}>Excluir minha conta</Text>                
                        <Text>Remover conta e excluir registros</Text>
                        <View style={styles.hr}/>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button}>
                <View style={styles.options}>
                    <Image source = {require('../../assets/images/x.png')} style = {styles.icon}/>
                    <View>
                        <Text style={styles.title}>Sair</Text>     
                        <Text>Fazer logout do aplicativo</Text>
                        <View style={styles.hr}/>
                    </View>
                    
                    
                </View>
                
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    options: {
        flexDirection: 'row'
    },
    title: {
        fontSize: 20,
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
    button: {
        marginTop: 30,
        marginLeft: 15
    },
    icon: {
        marginRight: 10
    },
    hr: {
        width: 300,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginTop: 10,
    }
})

export default Perfil
