import { View, StyleSheet, Text, Slider } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function Home() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={ESTILO.header}>
                <Text style={ESTILO.title}>
                    Minhas senhas
                </Text>
            </View >
            <View style={ESTILO.area}>
                <Slider Slider style={{ height: 50 }} />/
                minimumTrackTintColor="#ff0000"
                maximumTrackTintColor="#000"
                thumbTintColor="#392de9"
                
            </View>
        </SafeAreaView>
    )
}

const ESTILO = StyleSheet.create({
    header: {
        padding: 14,
        paddingTop: 58,
        backgroundColor: "#392de9"
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFF"
    }

})