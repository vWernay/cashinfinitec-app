import { Slot } from "expo-router"
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from "react-native"

export default function AuthLayout() {
  return (
    <KeyboardAvoidingView
      className="flex-1 bg-zinc-800"
      behavior={"padding"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 5}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View className="flex-1">
            <Slot />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
