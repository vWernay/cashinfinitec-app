import { BadgeDollarSign, ChartNoAxesColumnIncreasing, List, Rocket, Truck } from 'lucide-react-native'

const ICON_SIZE = 32;

type TabsConfig = Record<string, {
    title: string;
    icon: ({ color, size }: { color: string, size: number }) => React.ReactNode;
}>

export const tabs: TabsConfig = {
    home: {
        title: 'Início',
        icon: ({ color }) => <ChartNoAxesColumnIncreasing color={color} size={ICON_SIZE} />,
    },
    offers: {
        title: 'Ofertas',
        icon: ({ color }) => <BadgeDollarSign color={color} size={ICON_SIZE} />,
    },
    profile: {
        title: 'Perfil',
        icon: ({ color }) => <Rocket color={color} size={ICON_SIZE} />,
    },
    orders: {
        title: 'My Orders',
        icon: ({ color }) => <Truck color={color} size={ICON_SIZE} />,
    },
    catalog: {
        title: 'Catálogo',
        icon: ({ color }) => <List color={color} size={ICON_SIZE} />,
    },
};
