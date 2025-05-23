import type { ImageSourcePropType } from "react-native"

type Product = {
  id: number
  image: ImageSourcePropType
  title: string
  price: string
  oldPrice: string
  finalPrice: string
  installments: string
  cashback: string
  discount: string
  cashbackText: string
}

export const homeProducts: Product[] = [
  {
    id: 1,
    image: require("../../assets/images/amd-cpu.png"),
    title: "Processador AMD Ryzen Threadripper 7980X",
    price: "R$ 33.071,26",
    oldPrice: "R$ 36.746,26",
    finalPrice: "R$ 30.425,56",
    installments: "ou 10x de R$ 3.307,126 sem juros",
    cashback: "R$ 2.645,70",
    discount: "10% OFF",
    cashbackText: "Até 8% de cashback",
  },
  {
    id: 2,
    image: require("../../assets/images/fan.png"),
    title: "Ventoinha (Cooler) - 12cm Noctua NF-A12x15-PWM",
    price: "R$ 195,14",
    oldPrice: "R$ 221,75",
    finalPrice: "R$ 179,53",
    installments: "ou 4x de R$ 48,78  sem juros",
    cashback: "R$ 15,61",
    discount: "12% OFF",
    cashbackText: "Até 8% de cashback",
  },
  {
    id: 3,
    image: require("../../assets/images/monitor.png"),
    title: "Monitor Gamer LG UltraGear OLED – Tela OLED 27",
    price: "R$ 4.249,99",
    oldPrice: "R$ 4.999,99",
    finalPrice: "R$ 4.037,49",
    installments: "ou 12x de R$ 354,16 sem juros",
    cashback: "R$ 212,50",
    discount: "15% OFF",
    cashbackText: "Até 8% de cashback",
  },
  {
    id: 4,
    image: require("../../assets/images/ram.png"),
    title: "Memória RAM Husky Impulse, 16GB",
    price: "R$ 237,99",
    oldPrice: "R$ 255,90",
    finalPrice: "R$ 35,70",
    installments: "ou 4x de R$ 59,50 sem juross",
    cashback: "R$ 202,29",
    discount: "7% OFF",
    cashbackText: "Até 15% de cashback",
  },
]
