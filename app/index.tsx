import { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { useAuth } from '../contexts/auth-context';
import { useRouter } from 'expo-router';

export default function SplashScreen() {
    const { user, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (isLoading) return;

        if (user === null) {
            router.replace('/auth');
        } else {
            router.replace('/home');
        }
    }, [user, isLoading, router.replace]);


    return (
        <View className="flex-1 items-center justify-center bg-zinc-800">
            <Image source={require('../assets/logo.png')} className="w-40 h-40 mb-4" resizeMode="contain" />
            <Text className="text-white text-xl font-bold">Bem-vindo de volta!</Text>
        </View>
    );
}
