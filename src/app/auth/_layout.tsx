import { useAuth } from "@/contexts/auth-context"
import { Slot, useRouter } from "expo-router"
import { useEffect } from "react"
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from "react-native"

export default function AuthLayout() {
  const router = useRouter()
  const { user, isLoading } = useAuth()

  useEffect(() => {
    if (!isLoading && user !== null) {
      router.replace("/")
    }
  }, [user, isLoading, router])

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-zinc-800"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Slot />
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
