import { Stack } from "expo-router";

const RootLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={
                {
                    headerShown: false
                }
            }></Stack.Screen>
            <Stack.Screen name="cadastro"/>
            <Stack.Screen name="(tabs)" options={
                {
                    headerShown: false
                }
            }/>
        </Stack>
    )
}

export default RootLayout;