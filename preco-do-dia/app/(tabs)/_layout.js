import { Image } from "react-native";
import { Tabs } from "expo-router";

export default function TabLayout() {
    return(
        <Tabs screenOptions={{ tabBarActiveTintColor: '#1C7506', tabBarShowLabel: false, headerTitleAlign: 'center', tabBarStyle: {heigth: 60, paddingBottom: 10, paddingTop: 5, justifyContent: 'center', alignItems: 'center'} }}>
            <Tabs.Screen 
                name="index"
                options={{
                    headerShown: false,
                    
                    tabBarIcon: ({focused, color}) => (
                        <Image 
                            source = {require('../../assets/images/Home.png')}
                            style={{width:35, heigth: 35, tintColor: focused ? color : '#0CC29E'}}
                            resizeMode="contain"
                        />
                    )
                }}
            />
            <Tabs.Screen 
                name="addProduto"
                options={{
                    title: 'Adicionar Produto',
                    tabBarIcon: ({focused, color}) => (
                        <Image 
                            source = {require('../../assets/images/Grid.png')}
                            style={{width:35, heigth: 35, tintColor: focused ? color : '#0CC29E'}}
                            resizeMode="contain"
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="addCategoria"
                options={{
                    title: 'Adicionar Categoria',
                    tabBarIcon: ({focused, color}) => (
                        <Image 
                            source = {require('../../assets/images/List.png')}
                            style={{width:35, heigth: 35, tintColor: focused ? color : '#0CC29E'}}
                            resizeMode="contain"
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="addLocal"
                options={{
                    title: 'Adicionar Local',
                    tabBarIcon: ({focused, color}) => (
                        <Image 
                            source = {require('../../assets/images/Map pin.png')}
                            style={{width:35, heigth: 35, tintColor: focused ? color : '#0CC29E'}}
                            resizeMode="contain"
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="perfil"
                options={{
                    title: 'Perfil',
                    tabBarIcon: ({focused, color}) => (
                        <Image 
                            source = {require('../../assets/images/User.png')}
                            style={{width:35, heigth: 35, tintColor: focused ? color : '#0CC29E'}}
                            resizeMode="contain"
                        />
                    )
                }}
            />
        </Tabs>
    );
}