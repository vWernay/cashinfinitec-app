import { useLocalSearchParams } from 'expo-router';
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import { categories, categoryProducts } from '../../../lib/catalog.config';
import ShoppingCart from 'lucide-react-native/dist/esm/icons/shopping-cart';

export default function CategoryScreen() {
    const { category } = useLocalSearchParams();
    const categoryId = Number(category);
    const products = categoryProducts[categoryId];

    return (
        <View className="flex-1 bg-zinc-800">
            <Image
                source={require('../../../../assets/logo.png')}
                resizeMode="contain"
                className="w-40 h-40 self-center mt-4"
            />
            <View className="flex-1 px-4">
                <Text className="text-3xl font-medium text-white uppercase mb-4">
                    {categories.find((cat) => cat.id === categoryId)?.name ?? 'Categoria não encontrada'}
                </Text>

                {!products || products.length === 0 ? (
                    <View className="flex-1 justify-center items-center">
                        <Text className="text-2xl text-white">Nenhum produto encontrado</Text>
                    </View>
                ) : (
                    <FlatList
                        data={products}
                        keyExtractor={(item) => item.id.toString()}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingVertical: 10, gap: 10 }}
                        renderItem={({ item: product }) => (
                            <View className="flex-row bg-white rounded-xl">
                                <View className="w-32 h-32 rounded-md overflow-hidden justify-center items-center bg-white">
                                    <Image
                                        source={product.image}
                                        resizeMode="contain"
                                        className="w-28 h-28"
                                    />
                                </View>
                                <View className="flex-1 flex-row ml-4 p-3 bg-zinc-300 rounded-tr-xl rounded-br-xl">
                                    <View className='w-48'>
                                        <Text className="text-base font-semibold text-zinc-900 uppercase">{product.title}</Text>
                                        <Text className="text-sm text-zinc-600 uppercase mb-2">{product.discount}% de desconto com bônus</Text>

                                        <TouchableOpacity className="bg-green rounded-lg px-3 py-2 mb-1 active:opacity-80">
                                            <Text
                                                className="text-white text-sm font-medium text-center"
                                                style={{ fontFamily: 'Roboto_500Medium' }}
                                            >
                                                PEÇA AQUI
                                            </Text>
                                        </TouchableOpacity>

                                        <Text className="text-xs font-semibold text-green-700 uppercase">+{product.points} pontos</Text>
                                    </View>
                                    <View className='ml-auto items-center justify-between'>
                                        <TouchableOpacity>
                                            <ShoppingCart size={24} color='#0F912B' />
                                        </TouchableOpacity>
                                        <Image
                                            source={product.shopImage}
                                            resizeMode='contain'
                                            className='h-20 w-16'
                                        />
                                    </View>
                                </View>
                            </View>
                        )}
                    />
                )}
            </View>
        </View >
    );
}
