import { AlignJustify, History, Search, ShoppingCart } from 'lucide-react-native';
import { View, Image, TouchableOpacity, TextInput, Text, FlatList } from 'react-native';
import React from 'react';
import { homeProducts } from '../../lib/home-products.config';

export default function Home() {
    return (
        <View className="flex-1 bg-zinc-800">
            <Image
                source={require('../../assets/logo.png')}
                resizeMode='contain'
                className='w-40 h-40'
            />
            <View className='flex-row items-center justify-end gap-3 px-6 mb-3'>
                <View className='flex-row items-center relative w-80'>
                    <View className='absolute left-0 ml-4 z-10'>
                        <AlignJustify size={18} color='#27272a' />
                    </View>

                    <TextInput
                        className='bg-white text-zinc-800 w-full rounded-full py-4 px-12'
                        placeholder='O que você procura hoje?'
                    />

                    <View className='absolute right-0 mr-6'>
                        <Search size={18} color="#27272a" />
                    </View>
                </View>
                <TouchableOpacity>
                    <ShoppingCart size={36} color="#0550A2" />
                </TouchableOpacity>
            </View>
            <FlatList
                data={homeProducts}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 14, paddingBottom: 10 }}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                renderItem={({ item: product }) => (
                    <View className="bg-zinc-300 rounded-md p-4 mb-4 w-[49%]">
                        <View className="items-center gap-2 px-5">
                            <Image
                                source={product.image}
                                resizeMode="contain"
                                className="w-full h-20"
                            />
                            <View className="w-full rounded-sm bg-green">
                                <Text className="text-white text-sm text-center">
                                    {product.cashbackText}
                                </Text>
                            </View>
                            <Text className="text-base font-semibold text-black">
                                {product.title}
                            </Text>
                        </View>

                        <View className="mt-2">
                            <Text className="text-xs line-through text-zinc-500">{product.oldPrice}</Text>
                            <Text className="text-sm text-black font-semibold">
                                {product.price} à vista
                            </Text>
                            <Text className="text-[8px] text-zinc-600">{product.installments}</Text>

                            <View className="bg-zinc-400 rounded-sm p-[2px] absolute right-0 top-0">
                                <Text className="text-xs font-semibold text-black">
                                    {product.discount}
                                </Text>
                            </View>

                            <View className="flex-row items-center gap-1 mt-2">
                                <History size={12} color="#111111" />
                                <Text className="text-base text-[#00B200] font-semibold">
                                    Até {product.cashback}
                                </Text>
                            </View>

                            <View className="w-full border-b-zinc-600 border-[0.3px] my-2" />

                            <View className="flex-row justify-between items-center">
                                <View>
                                    <Text className="text-sm text-zinc-500 font-semibold">Sai por:</Text>
                                    <Text className="text-sm text-black font-semibold">{product.finalPrice}</Text>
                                </View>
                                <TouchableOpacity className="border border-green rounded-md w-8 h-8 items-center justify-center">
                                    <ShoppingCart size={18} color="#008000" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}
