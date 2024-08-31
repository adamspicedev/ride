import { ReactNode } from 'react'
import { SafeAreaView } from 'react-native'

const KeyboardAvoidingContainer = ({ children }: { children: ReactNode }) => {
    return <SafeAreaView className="flex-1 bg-white">{children}</SafeAreaView>
}

export default KeyboardAvoidingContainer
