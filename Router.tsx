import React from "react";
import Index from "./pages/index";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Follow from "./pages/follow";
import Procast from "./pages/podcast";
import MyPage from "./pages/myPage";

const RootNavigator: React.FC = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Index} options={{ headerShown: false }} />
            <Stack.Screen name="Procast" component={Procast} options={{ headerShown: false }} />
            <Stack.Screen name="Follow" component={Follow} options={{ headerTitle: "动态",headerBackVisible: false }} />
            <Stack.Screen name="MyPage" component={MyPage} options={{ headerTitle: "我的",headerBackVisible: false }} />
        </Stack.Navigator>
    )
}

export default RootNavigator;