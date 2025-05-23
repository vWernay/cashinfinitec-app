import type { ColorValue, ImageSourcePropType } from "react-native"

type Offer = {
    id: number
    image: ImageSourcePropType
    colors: [ColorValue, ColorValue, ...ColorValue[]]
    title?: string
    footer?: string
    discount: number
    code: string
}

export const offers: Offer[] = [
    {
        id: 1,
        image: require('../../assets/images/pichau-logo.png'),
        colors: ['#B30101', '#4D0000'],
        discount: 20,
        code: 'CF-V586',
    },
    {
        id: 2,
        image: require('../../assets/images/kabum-logo.png'),
        colors: ['#011EB3', '#09004D'],
        title: 'Ganhe até',
        footer: 'Desconto na primeira compra',
        discount: 40,
        code: 'CF-404030',
    },
    {
        id: 3,
        image: require('../../assets/images/terabyte-logo.png'),
        colors: ['#B35401', '#4D2600'],
        discount: 15,
        code: 'CF-15586',
    },
    {
        id: 4,
        image: require('../../assets/images/udemy-logo.png'),
        colors: ['#6D04D0', '#0A0010'],
        discount: 5,
        code: 'CF-5E586',
    },
]