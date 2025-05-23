import { View, Image, Text, TouchableOpacity } from "react-native";
import { useAuth } from "../../../contexts/auth-context";

import IdCard from 'lucide-react-native/dist/esm/icons/id-card';
import LogOut from 'lucide-react-native/dist/esm/icons/log-out';

export default function Profile() {
    const { user, logout } = useAuth();

    const handleLogout = async () => {
        await logout()
    }

    return (
        <View className="flex-1 bg-zinc-800">
            <Image
                source={require('../../../assets/logo.png')}
                resizeMode='contain'
                className='w-40 h-40'
            />
            <View className="bg-green rounded-3xl flex-row justify-between p-8 mt-[-30]">
                <IdCard size={48} color='#FFD700' />
                <View className="gap-6 items-center">
                    <Image source={require('../../../assets/images/avatar.png')} />
                    <View className="bg-zinc-100 rounded-full px-4 py-2 max-w-64">
                        <Text
                            className='text-black text-1xl text-center'
                            style={{ fontFamily: 'Roboto_500Medium' }}
                        >
                            {user?.email}
                        </Text>
                    </View>
                </View>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={handleLogout}
                >
                    <LogOut size={40} color='#FFD700' />
                </TouchableOpacity>
            </View>
        </View>
    )
}
