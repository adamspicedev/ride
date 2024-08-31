import { Stack } from 'expo-router'
import 'react-native-reanimated'

const Layout = () => {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="welcome" />
            <Stack.Screen name="sign-up" />
            <Stack.Screen name="sign-in" />
        </Stack>
    )
}

export default Layout
