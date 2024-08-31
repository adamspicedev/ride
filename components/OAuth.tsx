import { icons } from '@/constants'
import { Image, Text, View } from 'react-native'
import CustomButton from './CustomButton'

const OAuth = () => {
    const handleGoogleSignIn = async () => {}

    return (
        <View>
            <View className="flex flex-row items-center justify-center mt-4 gap-x-3">
                <View className="flex-1 h-[1px] bg-general-100" />
                <Text className="text-lg">Or</Text>
                <View className="flex-1 h-[1px] bg-general-100" />
            </View>
            <CustomButton
                title="Sign In with Google"
                bgVariant="outline"
                textVariant="primary"
                className="w-full mt-5 shadow-none"
                IconLeft={() => (
                    <Image
                        source={icons.google}
                        resizeMode="contain"
                        className="w-6 h-6 mx-2"
                    />
                )}
                onPress={handleGoogleSignIn}
            />
        </View>
    )
}

export default OAuth
