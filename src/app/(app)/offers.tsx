import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Clipboard from 'expo-clipboard';
import { offers } from '../../lib/offers.config';
import Toast from 'react-native-toast-message';

import Copy from 'lucide-react-native/dist/esm/icons/copy'
import CopyCheck from 'lucide-react-native/dist/esm/icons/copy-check'

export default function Offers() {
    const [copiedCode, setCopiedCode] = useState<string | null>(null);

    const handleCopy = async (cuponCode: string) => {
        setCopiedCode(cuponCode);
        await Clipboard.setStringAsync(cuponCode);

        Toast.show({
            type: 'success',
            text1: 'Código copiado com sucesso',
            text2: 'Agora é só colar no site da loja parceira e aproveitar o desconto!'
        });

        setTimeout(() => {
            setCopiedCode(null);
        }, 2000);
    };

    return (
        <View className="flex-1 bg-zinc-800">
            <Image
                source={require('../../../assets/logo.png')}
                resizeMode='contain'
                className='w-40 h-40'
            />
            <View className='flex-1 px-6 gap-3'>
                <View className='w-72'>
                    <Text
                        className='text-white text-3xl font-roboto-semibold'
                    >
                        Ofertas
                    </Text>
                    <Text
                        className='text-white text-base'
                        style={{ fontFamily: 'Roboto_400Regular' }}
                    >
                        Utilize um de nossos cupons de desconto em nossas lojas parceiras, economizando ainda mais em seus pedidos!
                    </Text>
                </View>
                <FlatList
                    data={offers}
                    keyExtractor={(item) => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 10 }}
                    renderItem={({ item: offer }) => (
                        <View className='w-full mb-4' style={{ borderRadius: 5, overflow: 'hidden' }}>
                            <LinearGradient
                                colors={offer.colors}
                                start={{ x: 0.2, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                className='flex-row p-3'
                            >
                                <View className='mr-auto'>
                                    <View>
                                        <Text className='text-xs text-white'>{offer.title ?? 'Até'}</Text>
                                        <Text className='text-3xl text-white font-medium'>{offer.discount} OFF</Text>
                                        <Text className='text-xs text-white'>{offer.footer ?? 'Cupom de desconto'}</Text>
                                    </View>
                                    <TouchableOpacity
                                        className='bg-white rounded-xl p-2 mt-4 flex-row self-start items-center gap-2'
                                        activeOpacity={0.8}
                                        onPress={() => handleCopy(offer.code)}
                                    >
                                        {copiedCode === offer.code ? <CopyCheck size={15} /> : <Copy size={14} />}
                                        <Text className='text-xs font-medium'>{offer.code}</Text>
                                    </TouchableOpacity>
                                </View>
                                <Image source={offer.image} />
                            </LinearGradient>
                        </View>
                    )}
                />
            </View>
        </View >
    );
}
