import { Tabs, useRouter } from "expo-router"
import { useEffect } from "react"
import { useAuth } from "../../contexts/auth-context"
import { tabs } from "../../lib/tabs.config"

export default function AppLayout() {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && user === null) {
      router.replace("/auth")
    }
  }, [user, isLoading, router])

  if (isLoading || user === null) return null

  return (
    <Tabs
      screenOptions={({ route }) => {
        const config = tabs[route.name as keyof typeof tabs]

        return {
          headerShown: false,
          tabBarActiveTintColor: "#FFD700",
          tabBarInactiveTintColor: "#0550A2",
          tabBarStyle: {
            backgroundColor: "#3f3f46",
            borderTopWidth: 0,
            paddingTop: 5,
            height: 60,
            boxShadow: "0 0 15px rgba(255, 255, 255, 0.3)",
          },
          tabBarShowLabel: false,
          tabBarIcon: config?.icon,
        }
      }}
    >
      <Tabs.Screen name="home" />
      <Tabs.Screen name="offers" />
      <Tabs.Screen name="profile" />
      <Tabs.Screen name="orders" />
      <Tabs.Screen name="catalog" />
    </Tabs>
  )
}
