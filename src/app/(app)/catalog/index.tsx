import { View, Image, Text, FlatList, TouchableOpacity } from 'react-native';
import { categories } from '../../../lib/catalog.config';
import { useRef, useState } from 'react';
import { useRouter } from 'expo-router';
import ArrowDownFromLine from 'lucide-react-native/dist/esm/icons/arrow-down-from-line';

export default function Catalog() {
    const router = useRouter();

    const flatListRef = useRef<FlatList>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleScrollToNext = () => {
        const nextIndex = currentIndex + 1;
        if (nextIndex < categories.length) {
            flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
            setCurrentIndex(nextIndex);
        }
    };

    return (
        <View className="flex-1 items-center px-6 py-12 bg-zinc-800 gap-3">
            <Image source={require('../../../../assets/logo.png')} />
            <Text className='text-2xl font-medium text-white self-start'>CATEGORIAS DE CASHBACK</Text>
            <FlatList
                ref={flatListRef}
                data={categories}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingVertical: 10 }}
                className='w-full'
                renderItem={({ item: category }) => (
                    <TouchableOpacity
                        className='w-full bg-zinc-100 rounded-xl p-4 mb-2'
                        activeOpacity={0.8}
                        onPress={() => router.push(`/catalog/${category.id}`)}
                    >
                        <Text className='text-3xl font-medium text-zinc-900 text-center uppercase'>{category.name}</Text>
                    </TouchableOpacity>
                )}
                onScrollToIndexFailed={(info) => {
                    flatListRef.current?.scrollToOffset({
                        offset: info.averageItemLength * info.index,
                        animated: true,
                    });
                }}
            />
            <TouchableOpacity onPress={handleScrollToNext} activeOpacity={0.7}>
                <ArrowDownFromLine size={45} color="#e7e7e7" />
            </TouchableOpacity>
        </View>
    );
}
