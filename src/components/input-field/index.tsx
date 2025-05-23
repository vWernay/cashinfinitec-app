import clsx from "clsx"
import Eye from "lucide-react-native/dist/esm/icons/eye"
import EyeOff from "lucide-react-native/dist/esm/icons/eye-off"
import { useState } from "react"
import {
  Text,
  TextInput,
  type TextInputProps,
  TouchableOpacity,
  View,
} from "react-native"

type Props = TextInputProps & {
  icon?: React.ReactNode
  error?: string
}

export default function InputField({
  icon,
  secureTextEntry,
  error,
  className,
  ...rest
}: Props) {
  const [isHidden, setIsHidden] = useState(secureTextEntry)

  return (
    <View>
      <View className="flex-row items-center relative">
        {icon && <View className="absolute left-0 ml-2 z-10">{icon}</View>}

        <TextInput
          className={clsx(
            "bg-zinc-700 text-white w-full rounded-lg py-5 px-10",
            error && "border border-red-500",
            className,
          )}
          secureTextEntry={isHidden}
          {...rest}
        />

        {secureTextEntry !== undefined && (
          <TouchableOpacity
            onPress={() => setIsHidden(!isHidden)}
            className="absolute right-0 mr-4"
          >
            {isHidden ? (
              <EyeOff size={20} color="#fff" />
            ) : (
              <Eye size={20} color="#fff" />
            )}
          </TouchableOpacity>
        )}
      </View>

      {error && (
        <Text className="text-red-500 text-sm mt-1 font-roboto-medium">
          {error}
        </Text>
      )}
    </View>
  )
}
