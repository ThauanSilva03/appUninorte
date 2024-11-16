import { Stack } from "expo-router";

const RootLayout = () => {
    return (
        <Stack>
            <Stack.screen name="inicio" options={
                {
                    headerShown: false
                }
            }></Stack.screen>
            <Stack.screen name="index"></Stack.screen>
        </Stack>
    )
}

export default RootLayout;