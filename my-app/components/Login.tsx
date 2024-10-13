import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

export default function Login() {
    const [username, onChangeUsername] = useState("Seu usuário");
    const [password, onChangePassword] = useState("Sua senha");
    const onPress = () => {
        console.log(username, password);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Login</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeUsername}
                value={username}
            ></TextInput>
            <TextInput
                secureTextEntry
                style={styles.input}
                onChangeText={onChangePassword}
                value={password}
            ></TextInput>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text>Imprimir Inputs</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10,
    },
    text: {
        textAlign: "center",
        fontSize: 20,
    },
    input: {
        height: 40,
        margin: 5,
        borderWidth: 1,
        padding: 10,
    },
    button: {
        height: 40,
        margin: 5,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#f0f0f0',
    },
});
