import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_600SemiBold,
  useFonts,
} from "@expo-google-fonts/roboto"
import { Slot, SplashScreen } from "expo-router"
import "./global.css"
import React, { useEffect } from "react"
import Toast from "react-native-toast-message"
import { AuthProvider } from "../contexts/auth-context"

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_600SemiBold,
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync()
    }
  }, [loaded, error])

  if (!loaded && !error) return null

  return (
    <AuthProvider>
      <Slot />
      <Toast position="bottom" />
    </AuthProvider>
  )
}
