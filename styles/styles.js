import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  buttonContainer: {
    alignItems: "stretch",
  },
  launchButton: {
    backgroundColor: "#2196F3",
    padding: 15,
    borderRadius: 10,
  },
  launchButtonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
  camera: {
    flex: 1,
  },
  button: {
    alignItems: "center",
    padding: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  gText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    textAlign: 'center',
  },
  gyroButtonContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginTop: 15,
  },
  firstButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2196F3',
    borderRadius: 5,
    padding: 10,
  },
  middleButton: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
});