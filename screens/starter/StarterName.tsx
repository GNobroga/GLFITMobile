import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { IUser } from "../../reducers/userReducer";
import { StackNavigationOptions } from "@react-navigation/stack";
import NextButton from "../../components/NextButton";

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: #fff;
  padding: 10%;
`;
const HeaderText = styled.Text`
  font-size: 22px;
  color: #9438f5;
  margin-top: 50px;
  margin-bottom: 50px;
`;
const NameInput = styled.TextInput`
  border: 1px solid #ccc;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  font-size: 16px;
  padding: 10px;
  background-color: #fff;
  color: #333;
  border: 2px solid #9438f5;
  height: 60px;
`;

const Image = styled.ImageBackground``;

const StarterName = () => {
  const navigation = useNavigation();
  const name = useSelector((user: IUser) => user.name);
  const dispatch = useDispatch();

  const nextAction = () => {
    if (!name) {
      alert("Você precisa de um nome!");
      return;
    }

    navigation.navigate("StarterDias" as never);
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <NextButton text="Prosseguir" onPress={nextAction} />;
      },
    } as StackNavigationOptions);
  }, [name]);

  const handleChangeName = (t: string) => {
    dispatch({ type: "SET_NAME", payload: { name: t } });
  };

  return (
    <Container>
      <HeaderText>Qual é o seu nome?</HeaderText>
      <NameInput
        value={name}
        onChangeText={handleChangeName}
        autoFocus={true}
        autoCapitalize="words"
        onSubmitEditing={nextAction}
      />
    </Container>
  );
};

export default StarterName;
