import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { useDispatch, useSelector } from "react-redux";
import DefaultButton from "../../components/DefaulButton";
import { IUser } from "../../reducers/userReducer";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationOptions } from "@react-navigation/stack";
import NextButton from "../../components/NextButton";

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: #fff;
  padding: 10%;
`;
const HeaderText = styled.Text`
  font-size: 18px;
  color: #333;
  text-align: center;
  margin-bottom: 30px;
  color: #9438F5;
`;

const LevelArea = styled.View`
  width: 100%;
`;
const BoldText = styled.Text`
  font-weight: bold;
  color: #9438F5;
  font-size: 18px;
`;

const StarterNivel = () => {
  const workoutDays = useSelector((user: IUser) => user.workoutDays);
  const level = useSelector((user: IUser) => user.level);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const nextAction = () => {
    if (!level) {
      alert("Você precisa de um nome!");
      return;
    }

    navigation.navigate("StarterRecommendations" as never);
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <NextButton text="Prosseguir" onPress={nextAction} />;
      },
    } as StackNavigationOptions);
  }, [level]);

  let funnyPhrase = "";

  switch (workoutDays.length) {
    case 1:
      funnyPhrase = "Só 1 dia não vai adiantar muito, mas...";
      break;
    case 2:
      funnyPhrase = "2 dias eu acho pouco, mas quem sou eu pra te julgar?";
      break;
    case 3:
      funnyPhrase = "Legal, 3 dias dá pro gasto...";
      break;
    case 4:
      funnyPhrase = "Legal, 4 dias vai ser TOP!";
      break;
    case 5:
      funnyPhrase = "É isso aí, 5 dias é o mínimo, lets GO!";
      break;
    case 6:
      funnyPhrase = "É, 6 dias não é pra todo mundo...";
      break;
    case 7:
      funnyPhrase = "Wooow! Todo dia?! WTF?!";
      break;
  }

  const setMyLevel = (l: string) => {
    dispatch({ type: "SET_LEVEL", payload: { level: l} });
  };

  return (
    <Container>
      <HeaderText>{funnyPhrase}</HeaderText>
      <HeaderText>
        <BoldText>Qual seu nível hoje?</BoldText>
      </HeaderText>

      <LevelArea>
        <DefaultButton
          bgcolor={level == "beginner" ? "rgba(148, 56, 245, 0.6)" : 'rgba(148, 56, 245, 1)'}
          onPress={() => setMyLevel("beginner")}
          style={{ marginBottom: 20, height: 80 }}
          underlayColor="#CCC"
        >
          <Text style={{ color: '#fff', fontSize: 18 }}>Iniciante / Um frango</Text>
        </DefaultButton>
        <DefaultButton
          bgcolor={level == "intermediate" ? "rgba(148, 56, 245, 0.6)" : 'rgba(148, 56, 245, 1)'}
          onPress={() => setMyLevel("intermediate")}
          style={{ marginBottom: 20, height: 80 }}
          underlayColor="#CCC"
        >
          <Text style={{ color: '#fff', fontSize: 18 }}>Intermediário / Me viro bem</Text>
        </DefaultButton>
        <DefaultButton
          bgcolor={level == "advanced" ? "rgba(148, 56, 245, 0.6)" : 'rgba(148, 56, 245, 1)'}
          onPress={() => setMyLevel("advanced")}
          style={{ marginBottom: 20, height: 80 }}
          underlayColor="#CCC"
        >
          <Text style={{ color: '#fff', fontSize: 18 }}>Avançado / Primo do The Rock</Text>
        </DefaultButton>
      </LevelArea>
    </Container>
  );
};


export default StarterNivel;
