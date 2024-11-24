import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/styles";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Phone App!</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.launchButton}
          onPress={() => navigation.navigate("Camera")}
        >
          <Text style={styles.launchButtonText}>Launch Camera</Text>
        </TouchableOpacity>
        <View style={{height:10}}></View>
        <TouchableOpacity
          style={styles.launchButton}
          onPress={() => navigation.navigate("Gyro")}
        >
          <Text style={styles.launchButtonText}>Gyroscope</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}