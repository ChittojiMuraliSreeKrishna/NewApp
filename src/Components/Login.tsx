import React, { Dispatch, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { shallowEqual } from "react-redux";
import { addPeople } from "../redux/actions/authActions";
import Input from "./Input";
import Modal from "react-native-modal";

type RootStackParamList = {
  Body: undefined;
  Login: undefined;
  Home: undefined;
};

type LoginScreenNavigationProp = NavigationProp<RootStackParamList, "Login">;
type LoginScreenRouteProp = RouteProp<RootStackParamList, "Login">;

type Props = {
  navigation: LoginScreenNavigationProp;
  route: LoginScreenRouteProp;
};

interface IPeople {
  id: number;
  username: string;
  password: string;
}

interface PeopleState {
  peoples: readonly IPeople[];
}

const Login: React.FC<Props> = ({ route, navigation }) => {
  const peoples: readonly IPeople[] = useSelector(
    (state: PeopleState) => state.peoples,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [popup, setPopup] = useState<boolean>(false);

  function register() {
    const newPeople: IPeople = {
      id: 0,
      username: userName,
      password: password,
    };
    dispatch(addPeople(newPeople));
    setUserName("");
    setPassword("");
    openModal();
  }

  const login = () => {
    peoples.forEach((people) => {
      if (people.username === userName && people.password === password) {
        navigation.navigate("Home");
      }
    });
  }

  const openModal = () => {
    setPopup(!popup);
  };

  return (
    <View style={styles.body}>
      <Text style={styles.headings}>UserName:</Text>
      <Input
        onChangeText={setUserName}
        value={userName}
        secureTextEntry={false}
      />
      <Text style={styles.headings}>Password:</Text>
      <Input
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
      <View style={styles.registerCont}>
        <Text style={styles.registerText}>Not a user? </Text>
        <TouchableOpacity style={styles.registerBtn} onPress={openModal}>
          <Text style={styles.registerBtnText}>Register</Text>
        </TouchableOpacity>
      </View>
      <Modal
        style={{ margin: 0 }}
        isVisible={popup}
        onBackButtonPress={openModal}
        onBackdropPress={openModal}
      >
        <View style={styles.modal}>
          <ScrollView>
            <Text style={styles.headings}>UserName:</Text>
            <Input
              onChangeText={setUserName}
              value={userName}
              secureTextEntry={false}
            />
            <Text style={styles.headings}>Password:</Text>
            <Input
              onChangeText={setPassword}
              value={password}
              secureTextEntry={true}
            />
            <TouchableOpacity style={styles.button} onPress={register}>
              <Text style={styles.text}>Register</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  button: {
    width: "90%",
    marginHorizontal: "5%",
    backgroundColor: "green",
    height: 45,
    borderRadius: 5,
    marginTop: 20,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    paddingVertical: 10,
  },
  body: {
    height: "100%",
    marginVertical: "30%",
  },
  headings: {
    fontSize: 16,
    marginHorizontal: "5%",
    fontWeight: "600",
  },
  registerText: {
    textAlign: "center",
    color: "gray",
    fontSize: 16,
  },
  registerCont: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    height: 50,
  },
  registerBtn: {
    height: 30,
  },
  registerBtnText: {
    textAlign: "center",
    color: "black",
    textAlignVertical: "center",
    fontSize: 18,
    fontWeight: "600",
  },
  modal: {
    height: 400,
    width: "100%",
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    paddingTop: 50,
    borderRadius: 10,
  },
});
