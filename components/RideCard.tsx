import { Image, Text, View } from 'react-native'
import { icons } from '@/constants'
import { formatDate, formatTime } from '@/lib/utils'
import { Ride } from '@/types/type'

const LabelAndText = ({
    label,
    data,
    highlight = false,
}: {
    label: string
    data: string | number
    highlight?: boolean
}) => (
    <>
        <Text className="text-gray-500 text-md font-JakartaMedium">
            {label}
        </Text>
        <Text
            className={`text-gray-500 text-md font-JakartaMedium ${highlight ? (data === 'paid' ? 'text-green-500' : 'text-red-500') : ''} ${highlight ? 'capitalize' : ''}`}
        >
            {data}
        </Text>
    </>
)

const RideCard = ({
    ride: {
        destination_longitude,
        destination_latitude,
        origin_address,
        destination_address,
        created_at,
        ride_time,
        driver,
        payment_status,
    },
}: {
    ride: Ride
}) => {
    return (
        <View className="flex flex-row items-center justify-center mb-3 bg-white rounded-lg shadow-sm shadow-neutral-300">
            <View className="flex flex-col items-center justify-center p-3">
                <View className="flex flex-row items-center justify-between">
                    <Image
                        source={{
                            uri: `https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=400&center=lonlat:${destination_longitude},${destination_latitude}&zoom=14&apiKey=${process.env.EXPO_PUBLIC_GEOAPIFY_API_KEY}`,
                        }}
                        className="w-[80px] h-[90px] rounded-lg"
                    />
                    <View className="flex flex-col flex-1 mx-5 gapy-5">
                        <View className="flex flex-row items-center gap-x-2">
                            <Image source={icons.to} className="w-5 h-5" />
                            <Text
                                numberOfLines={1}
                                className="text-md font-JakartaMedium"
                            >
                                {origin_address}
                            </Text>
                        </View>
                        <View className="flex flex-row items-center gap-x-2">
                            <Image source={icons.point} className="w-5 h-5" />
                            <Text
                                numberOfLines={1}
                                className="text-md font-JakartaMedium"
                            >
                                {destination_address}
                            </Text>
                        </View>
                    </View>
                </View>
                <View className="flex flex-col items-start justify-center w-full p-3 mt-5 rounded-lg bg-general-500">
                    <View className="flex flex-row items-center justify-between w-full mb-5">
                        <LabelAndText
                            label="Date & Time"
                            data={`${formatDate(created_at)}, ${formatTime(ride_time)}`}
                        />
                    </View>
                    <View className="flex flex-row items-center justify-between w-full mb-5">
                        <LabelAndText
                            label="Driver"
                            data={`${driver.first_name} ${driver.last_name}`}
                        />
                    </View>
                    <View className="flex flex-row items-center justify-between w-full mb-5">
                        <LabelAndText
                            label="Car Seats"
                            data={driver.car_seats}
                        />
                    </View>
                    <View className="flex flex-row items-center justify-between w-full mb-5">
                        <LabelAndText
                            label="Payment Status"
                            data={payment_status}
                            highlight
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default RideCard
