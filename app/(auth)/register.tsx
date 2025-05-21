import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import { LockKeyhole, Phone, UserRound } from 'lucide-react-native';
import { useForm } from 'react-hook-form';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Button from '../../components/button';
import InputField from '../../components/input-field';
import { type RegisterSchema, registerSchema } from '../../schemas/register-schema';
import { useAuth } from '../../contexts/auth-context';

export default function LoginScreen() {
    const router = useRouter();
    const { register } = useAuth();

    const {
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<RegisterSchema>({
        resolver: zodResolver(registerSchema),
    });

    const onSubmit = async (data: RegisterSchema) => {
        try {
            await register(data.email, data.phone, data.password);
        } catch (e) {
            console.log("Register error", e);
        }
    };

    return (
        <View className="flex-1 items-center px-10 py-12 bg-zinc-800 gap-3">
            <Image source={require('./../../assets/logo.png')} />
            <View className='w-full'>
                <Text
                    className='text-white text-3xl font-medium'
                >
                    Crie uma conta
                </Text>
                <Text
                    className='text-white text-base'
                >
                    Registre-se para começar ganhando!
                </Text>
            </View>
            <View className='w-full gap-2' >
                <InputField
                    placeholder="E-mail"
                    icon={<UserRound size={20} color="#fff" />}
                    placeholderTextColor="#fff"
                    value={watch('email')}
                    onChangeText={(text) => setValue('email', text)}
                    error={errors.email?.message}
                />
                <InputField
                    placeholder="Telefone"
                    icon={<Phone size={20} color="#fff" />}
                    placeholderTextColor="#fff"
                    value={watch('phone')}
                    onChangeText={(text) => setValue('phone', text)}
                    error={errors.phone?.message}
                />
                <InputField
                    placeholder="Senha"
                    icon={<LockKeyhole size={20} color="#fff" />}
                    secureTextEntry
                    placeholderTextColor="#fff"
                    value={watch('password')}
                    onChangeText={(text) => setValue('password', text)}
                    error={errors.password?.message}
                />
                {watch('password')?.length > 0 && (
                    <InputField
                        placeholder="Confirme a senha"
                        placeholderTextColor="#fff"
                        secureTextEntry
                        icon={<LockKeyhole size={20} color="#fff" />}
                        value={watch('confirmPassword')}
                        onChangeText={(text) => setValue('confirmPassword', text)}
                        error={errors.confirmPassword?.message}
                    />
                )}
                <Button title='CRIAR CONTA' onPress={handleSubmit(onSubmit)} />
                <View className='flex-row gap-1'>
                    <Text className='text-white text-base'>
                        Já tem uma conta?
                    </Text>
                    <TouchableOpacity onPress={() => router.navigate('/login')} >
                        <Text className='text-green text-base font-semibold'>Fazer login.</Text>
                    </TouchableOpacity>
                </View>
            </View >
            <Text className='text-white absolute bottom-0 font-medium'>Ao continuar, você concorda com nossos termos.</Text>
        </View>
    );
}
