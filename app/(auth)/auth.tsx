import { useRouter } from 'expo-router';
import { Image, ImageBackground, Text, View } from 'react-native';
import Button from '../../components/button';

export default function AuthScreen() {
    const router = useRouter();
    return (
        <ImageBackground
            source={require('./../../assets/auth_home_bg.jpg')}
            resizeMode='cover'
            className='flex-1'
        >
            <View className='flex-1 w-full h-full flex-col px-12 py-12 bg-black/50 text-white'>
                <Image source={require('./../../assets/logo.png')} />
                <View className='mt-auto gap-3'>
                    <Text
                        className='text-white text-xl'
                    >
                        Compre e receba parte do seu dinheiro de volta!
                    </Text>
                    <Button title='ENTRAR' onPress={() => router.navigate('/login')} />
                    <Button title='CRIAR CONTA' outlined onPress={() => router.navigate('/register')} />
                </View>
            </View>
        </ImageBackground>
    );
}
