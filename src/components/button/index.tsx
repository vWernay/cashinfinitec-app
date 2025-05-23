import { Text, TouchableOpacity, type TouchableOpacityProps } from 'react-native';
import { clsx } from 'clsx';

type Variant = 'primary' | 'secondary';

type Props = TouchableOpacityProps & {
    title: string;
    variant?: Variant;
    outlined?: boolean;
};

const baseColors = {
    primary: {
        bg: 'bg-green',
        border: 'border-green',
        text: 'text-green',
        textFilled: 'text-white',
    },
    secondary: {
        bg: 'bg-yellow',
        border: 'border-yellow',
        text: 'text-yellow',
        textFilled: 'text-white',
    },
};

export default function Button({
    title,
    variant = 'primary',
    outlined = false,
    className,
    ...rest
}: Props) {
    const colors = baseColors[variant];

    return (
        <TouchableOpacity
            className={clsx(
                'px-4 py-2 rounded-lg border',
                outlined ? 'bg-transparent border-2' : colors.bg,
                colors.border,
                className
            )}
            {...rest}
        >
            <Text
                className={clsx(
                    'text-center text-xl font-roboto-medium',
                    outlined ? colors.text : colors.textFilled
                )}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
}
