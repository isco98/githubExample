import React, { useRef } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  KeyboardAvoidingView
} from "react-native";
import { Divider } from "react-native-elements";
import LoginForm from "../../components/Account/LoginForm";
import Toast from "react-native-easy-toast";
import LoginFacebook from "../../components/Account/LoginFacebook";

export default function Login(props) {
  const { navigation } = props;
  const toastRef = useRef();
  return (
    <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={10}>
      <ScrollView>
        <Image
          source={require("../../../assets/img/5-tenedores-letras-icono-logo.png")}
          style={styles.logo}
          resizeMode="contain"
        ></Image>

        <View style={styles.viewContainer}>
          <LoginForm toastRef={toastRef} />
          <CreateAccount navigation={navigation} />
        </View>

        <Divider style={styles.Divider}></Divider>

        <View style={styles.viewContainer}>
          <LoginFacebook></LoginFacebook>
        </View>
        <Toast ref={toastRef} position="center" opacity={0.5} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

function CreateAccount(props) {
  const { navigation } = props;

  return (
    <Text style={styles.textRegister}>
      ¿Aun no tienes una cuenta?{" "}
      <Text
        style={styles.btnRegister}
        onPress={() => navigation.navigate("Register")}
      >
        Registrarte
      </Text>
    </Text>
  );
}
const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 150,
    marginTop: 20
  },
  viewContainer: {
    marginRight: 40,
    marginLeft: 40,
    justifyContent: "flex-end"
  },
  textRegister: {
    marginTop: 15,
    marginLeft: 10,
    margin: 10
  },
  btnRegister: {
    color: "#00a680",
    fontWeight: "bold"
  },
  divider: {
    backgroundColor: "#00a680",
    margin: 40
  }
});
