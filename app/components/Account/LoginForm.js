import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { validateEmail } from "../../utils/Validation";
import Loading from "../Loading";
import * as firebase from "firebase";
import { withNavigation } from "react-navigation";

function LoginForm(props) {
  const { toastRef, navigation } = props;
  const [hidePassword, setHidePassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [IsVisibleLoading, setIsVisibleLoading] = useState(false);

  const login = async () => {
    setIsVisibleLoading(true);
    if (!email || !password) {
      toastRef.current.show("Todos los campos son obligatorios");
    } else {
      if (!validateEmail(email)) {
        toastRef.current.show("E-mail incorrecto");
      } else {
        await firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(() => {
            navigation.navigate("Account");
          })
          .catch(() => {
            toastRef.current.show("Email o contraseña incorrectos");
          });
      }
    }
    setIsVisibleLoading(false);
  };
  return (
    <View style={styles.formContainer}>
      <Input
        placeholder="Correo Electronico"
        containerStyle={styles.InputForm}
        onChange={e => setEmail(e.nativeEvent.text)}
        rightIcon={
          <Icon
            type="material-community"
            name="at"
            iconStyle={styles.IconRight}
          ></Icon>
        }
      ></Input>
      <Input
        placeholder="Contraseña"
        containerStyle={styles.InputForm}
        password={true}
        secureTextEntry={hidePassword}
        onChange={e => setPassword(e.nativeEvent.text)}
        rightIcon={
          <Icon
            type="material-community"
            name={hidePassword ? "eye-outline" : "eye-off-outline"}
            iconStyle={styles.IconRight}
            onPress={() => setHidePassword(!hidePassword)}
          ></Icon>
        }
      ></Input>
      <Button
        title="Iniciar sesion"
        containerStyle={styles.btnContainerLogin}
        buttonStyle={styles.btnLogin}
        onPress={login}
      ></Button>
      <Loading isvisible={IsVisibleLoading} text="Iniciando sesion" />
    </View>
  );
}

export default withNavigation(LoginForm);

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30
  },
  InputForm: {
    width: "100%",
    marginTop: 20
  },
  IconRight: {
    color: "#c1c1c1"
  },
  btnContainerLogin: {
    marginTop: 20,
    width: "95%"
  },
  btnLogin: {
    backgroundColor: "#00a680"
  }
});
