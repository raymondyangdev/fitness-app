import { SafeAreaView, Text, View } from 'react-native';
import { registerRootComponent } from 'expo';

export default function App() {
    return (
        <SafeAreaView>
            <View>
                <Text>Open up App.tsx to start working on your app!</Text>
            </View>
        </SafeAreaView>
    );
}

registerRootComponent(App);
