import type { ImageSourcePropType } from "react-native"

type Category = {
    id: number
    name: string
}

export const categories: Category[] = [
    {
        id: 1,
        name: 'Peças',
    },
    {
        id: 2,
        name: 'Monitores',
    },
    {
        id: 3,
        name: 'Tecnologia',
    },
    {
        id: 4,
        name: 'Gabinete',
    },
    {
        id: 5,
        name: 'Processadores',
    },
    {
        id: 6,
        name: 'Cursos',
    },
]

type Product = {
    id: number
    title: string
    discount: number
    points: number
    image: ImageSourcePropType
    shopImage: ImageSourcePropType
}

export const categoryProducts: Record<number, Product[]> = {
    1: [
        {
            id: 1,

            title: 'Placa mãe',
            discount: 15,
            points: 10,
            image: require('../../assets/images/motherboard.png'),
            shopImage: require('../../assets/images/terabyte-logo.png'),
        },
        {
            id: 2,
            title: 'NVMe',
            discount: 10,
            points: 5,
            image: require('../../assets/images/nvme.png'),
            shopImage: require('../../assets/images/kabum-logo.png'),
        }
    ]
}