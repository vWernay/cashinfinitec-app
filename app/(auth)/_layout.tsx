import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    TouchableWithoutFeedback,
    Keyboard,
    View,
} from 'react-native';
import { Slot } from 'expo-router';

export default function AuthLayout() {
    return (
        <KeyboardAvoidingView
            className="flex-1 bg-zinc-800"
            behavior={'padding'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 5}
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
    );
}
