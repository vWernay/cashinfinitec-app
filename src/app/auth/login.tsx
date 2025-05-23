import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "expo-router"
import LockKeyhole from "lucide-react-native/dist/esm/icons/lock-keyhole"
import UserRound from "lucide-react-native/dist/esm/icons/user-round"
import { useForm } from "react-hook-form"
import { Image, Text, TouchableOpacity, View } from "react-native"
import Button from "../../components/button"
import InputField from "../../components/input-field"
import { useAuth } from "../../contexts/auth-context"
import { type LoginSchema, loginSchema } from "../../schemas/login-schema"

export default function LoginScreen() {
  const router = useRouter()
  const { login } = useAuth()

  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginSchema) => {
    try {
      await login(data.email, data.password)
    } catch (e) {
      console.log("Login error", e)
    }
  }

  return (
    <View className="flex-1 items-center px-10 py-12 bg-zinc-800 gap-3">
      <Image source={require("../../../assets/logo.png")} />
      <View className="w-full">
        <Text className="text-white text-3xl font-medium">Entrar</Text>
        <Text className="text-white text-base">
          Entre para começar ganhando!
        </Text>
      </View>
      <View className="w-full gap-2">
        <InputField
          placeholder="E-mail"
          icon={<UserRound size={20} color="#fff" />}
          placeholderTextColor="#fff"
          value={watch("email")}
          onChangeText={(text) => setValue("email", text)}
          error={errors.email?.message}
        />
        <InputField
          placeholder="Senha"
          icon={<LockKeyhole size={20} color="#fff" />}
          secureTextEntry
          placeholderTextColor="#fff"
          value={watch("password")}
          onChangeText={(text) => setValue("password", text)}
          error={errors.password?.message}
        />
        <Button title="ENTRAR" onPress={handleSubmit(onSubmit)} />
        <View className="flex-row gap-1">
          <Text className="text-white text-base">Não tem uma conta?</Text>
          <TouchableOpacity onPress={() => router.navigate("/register")}>
            <Text className="text-green text-base font-semibold">
              Registrar-se.
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text className="text-white absolute bottom-0 font-medium">
        Ao continuar, você concorda com nossos termos.
      </Text>
    </View>
  )
}
