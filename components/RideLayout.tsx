import BottomSheet, {
    BottomSheetScrollView,
    BottomSheetView,
} from '@gorhom/bottom-sheet'
import { router } from 'expo-router'
import { type ReactNode, useRef } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import Map from '@/components/Map'
import { icons } from '@/constants'

const RideLayout = ({
    title,
    snapPoints,
    children,
}: {
    title: string
    snapPoints?: string[]
    children: ReactNode
}) => {
    const bottomSheetRef = useRef<BottomSheet>(null)

    return (
        <GestureHandlerRootView className="flex-1">
            <View className="flex-1 bg-white">
                <View className="flex flex-col h-screen bg-blue-500">
                    <View className="absolute z-10 flex flex-row items-center justify-start px-5 top-16">
                        <TouchableOpacity onPress={() => router.back()}>
                            <View className="items-center justify-center w-10 h-10 bg-white rounded-full">
                                <Image
                                    source={icons.backArrow}
                                    resizeMode="contain"
                                    className="w-6 h-6"
                                />
                            </View>
                        </TouchableOpacity>
                        <Text className="ml-5 text-xl font-JakartaSemiBold">
                            {title || 'Go Back'}
                        </Text>
                    </View>

                    <Map />
                </View>

                <BottomSheet
                    ref={bottomSheetRef}
                    snapPoints={snapPoints || ['40%', '85%']}
                    index={0}
                >
                    {title === 'Choose a Rider' ? (
                        <BottomSheetView
                            style={{
                                flex: 1,
                                padding: 20,
                            }}
                        >
                            {children}
                        </BottomSheetView>
                    ) : (
                        <BottomSheetScrollView
                            style={{
                                flex: 1,
                                padding: 20,
                            }}
                        >
                            {children}
                        </BottomSheetScrollView>
                    )}
                </BottomSheet>
            </View>
        </GestureHandlerRootView>
    )
}

export default RideLayout
