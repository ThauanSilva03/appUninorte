import { Stack } from "expo-router";

const RootLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="login" options={
                {
                    headerShown: false
                }
            }></Stack.Screen>
            <Stack.Screen name="inicio"></Stack.Screen>
            <Stack.Screen name="index" options={
                {
                    headerShown: false
                }
            }></Stack.Screen>
            <Stack.Screen name="cadastro"/>
        </Stack>
    )
}

export default RootLayout;