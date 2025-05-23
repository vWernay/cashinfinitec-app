import BadgeDollarSign from "lucide-react-native/dist/esm/icons/badge-dollar-sign"
import ChartNoAxesColumnIncreasing from "lucide-react-native/dist/esm/icons/chart-no-axes-column-increasing"
import List from "lucide-react-native/dist/esm/icons/list"
import Rocket from "lucide-react-native/dist/esm/icons/rocket"
import Truck from "lucide-react-native/dist/esm/icons/truck"

const ICON_SIZE = 32

type TabsConfig = Record<
  string,
  {
    title: string
    icon: ({ color, size }: { color: string; size: number }) => React.ReactNode
  }
>

export const tabs: TabsConfig = {
  home: {
    title: "Início",
    icon: ({ color }) => (
      <ChartNoAxesColumnIncreasing color={color} size={ICON_SIZE} />
    ),
  },
  offers: {
    title: "Ofertas",
    icon: ({ color }) => <BadgeDollarSign color={color} size={ICON_SIZE} />,
  },
  profile: {
    title: "Perfil",
    icon: ({ color }) => <Rocket color={color} size={ICON_SIZE} />,
  },
  orders: {
    title: "My Orders",
    icon: ({ color }) => <Truck color={color} size={ICON_SIZE} />,
  },
  catalog: {
    title: "Catálogo",
    icon: ({ color }) => <List color={color} size={ICON_SIZE} />,
  },
}
