import React from "react"
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Image} from "react-native"
import { router } from "expo-router"

const Login = () => {

    const register = () => {
        router.navigate('cadastro');
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
                <TextInput placeholder="User" style={styles.inputs}/>
            </View>
            <View>
                <Text style={styles.labelText}>Password</Text>
                <TextInput placeholder="Password" style={styles.inputs} secureTextEntry/>
            </View>
            <View>
                <TouchableOpacity style = {styles.button}>
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