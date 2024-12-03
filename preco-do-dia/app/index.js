import React, {useState} from "react"
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Image, Alert} from "react-native"
import { router } from "expo-router"
import useAuthStore from "../store/authStore"


const Login = () => {

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    const {login, mensagemErro, usuarioLogado} = useAuthStore();

    const handleInputUsuario = (text) => {
        setUsuario(text);
        console.log(usuario)
    }

    const handleInputSenha = (text) => {
        setSenha(text);
        console.log(senha)
    }
    
    const register = () => {
        router.navigate('cadastro');
    }

    // const login = () => {
    //     router.navigate('(tabs)');
    // }

    const logar = async () =>{

        console.log("teste",mensagemErro);

        if(usuario && senha){
            login(usuario, senha);
            
        }else{
            Alert.alert("Preencha os campos usuário e senha");
        }
        if(mensagemErro != ""){
            Alert.alert(mensagemErro);
        }
        if(usuarioLogado){
            router.replace('(tabs)');
        }
    }

    return (
        <View style = {styles.container}>
            <View>
                <Image 
                    style = {styles.img}
                    source = {require('../assets/images/logoPrecoDoDia.png')}/>
            </View>
            <View>
                <Text style={styles.textLogin}>Login</Text>
            </View>
            <View>
                <Text style={styles.labelText}>User</Text>
                <TextInput 
                    placeholder="User" 
                    style={styles.inputs} 
                    onChangeText = {handleInputUsuario} 
                    value = {usuario}/>
            </View>
            <View>
                <Text style={styles.labelText}>Password</Text>
                <TextInput 
                    placeholder="Password" 
                    style={styles.inputs}
                    onChangeText = {handleInputSenha} 
                    secureTextEntry/>
            </View>
            <View>
                <TouchableOpacity style = {styles.button} onPress = {logar} >
                    <Text style = {styles.texts}>Login</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress = {register}>
                    <Text style = {styles.registerText}>Register</Text>
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
        paddingTop: 50
    },
    inputs: {
        width: 350,
        height: 45,
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        marginBottom: 20,
        borderRadius: 5
    },
    textLogin: {
        fontSize: 40,
        margin: 20
    },
    button: {
        backgroundColor: 'green',
        padding: 15,
        width: 350,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    texts: {
        fontSize: 15,
        color: 'white'
    },
    img: {
        width: 205,
        height: 205,
        marginBottom: 35
    },
    labelText: {
        fontSize: 15,
        marginBottom: 10
    },
    registerText: {
        marginTop: 20,
        textDecorationLine: 'underline',
        color: '#007AFF'
    }
})

export default Login;