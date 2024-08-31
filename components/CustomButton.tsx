import { ButtonProps } from '@/types/type'
import { forwardRef } from 'react'
import { Text, TouchableOpacity, TouchableOpacityComponent } from 'react-native'

const getBgVariantStyle = (variant: ButtonProps['bgVariant']) => {
    switch (variant) {
        case 'secondary':
            return 'bg-secondary-500'
        case 'danger':
            return 'bg-danger-500'
        case 'outline':
            return 'bg-transparent border-neutral-500 border-[0.5px]'
        case 'success':
            return 'bg-success-500'
        default:
            return 'bg-primary-500'
    }
}

const getTextVariant = (variant: ButtonProps['textVariant']) => {
    switch (variant) {
        case 'primary':
            return 'text-black'
        case 'secondary':
            return 'text-secondary-100'
        case 'danger':
            return 'text-danger-100'
        case 'success':
            return 'text-success-100'
        default:
            return 'text-white'
    }
}

const CustomButton = forwardRef<TouchableOpacity, ButtonProps>(
    (
        {
            onPress,
            title,
            bgVariant = 'primary',
            textVariant = 'default',
            IconLeft,
            IconRight,
            className,
            ...props
        },
        ref,
    ) => {
        return (
            <TouchableOpacity
                ref={ref}
                {...props}
                onPress={onPress}
                className={`w-full rounded-full
        flex flex-row justify-center items-center p-3 shadow-md shadow-neutral-400/70 ${getBgVariantStyle(bgVariant)} ${className}`}
            >
                {IconLeft && <IconLeft />}
                <Text
                    className={`text-lg font-bold ${getTextVariant(textVariant)}`}
                >
                    {title}
                </Text>
                {IconRight && <IconRight />}
            </TouchableOpacity>
        )
    },
)

export default CustomButton
