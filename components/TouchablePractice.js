import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import React from "react";

const TouchablePractice = () => {
  const onPress = (msg) => {
    alert("Alert for: " + msg);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => onPress("Pressed Login Google Plus")}>
          <View>
            <View style={styles.buttonGPlusStyle}>
              <Image
                style={styles.buttonImageIconStyle}
                source={require("../assets/google-plus.png")}
              />
              <View style={styles.buttonIconSeparatorStyle}>

              </View>
              <Text style={styles.buttonTextStyle}>Login Using Google Plus</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPress("Pressed Login Google Plus")}>
          <View>
            <View style={styles.buttonFacebookStyle}>
              <Image
                style={styles.buttonImageIconStyle}
                source={require("../assets/facebook.png")}
              />
              <View style={styles.buttonIconSeparatorStyle}>

              </View>
              <Text style={styles.buttonTextStyle}>Login Using facebook</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  );
};

export default TouchablePractice;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    margin: 10,
    marginTop: 30,
    padding: 30,
  },
  buttonGPlusStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#dc4e41",
    borderWidth: 0.5,
    borderColor: "#fff",
    height: 40,
    borderRadius: 5,
    margin: 5,
  },
  buttonFacebookStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#485a96",
    borderWidth: 0.5,
    borderColor: "#fff",
    height: 40,
    borderRadius: 5,
    margin: 5,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch",
  },
  buttonTextStyle: { color: "#fff", marginBottom: 4, marginLeft: 10 },
  buttonIconSeparatorStyle: {
    backgroundColor: "#fff",
    width: 1,
    height: 40,
  },
});
