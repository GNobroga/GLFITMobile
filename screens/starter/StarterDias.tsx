import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { useSelector, useDispatch } from "react-redux";
import DefaultButton from "../../components/DefaulButton";
import { IUser } from "../../reducers/userReducer";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationOptions } from "@react-navigation/stack";
import NextButton from "../../components/NextButton";

const Container = styled.SafeAreaView`
  flex: 1;
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

const BoldText = styled.Text`
  font-weight: bold;
	color: #9438F5;
	font-size: 18px;
`;
const DaysArea = styled.View`
  flex-direction: column;
	flex: 1;
`;

const TextDay = styled.Text`
  color: #fff;
	font-size: 18px;
`;

const StarterDias = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const workoutDays = useSelector((user: IUser) => user.workoutDays);
  const name = useSelector((user: IUser) => user.name);

  const dispatch = useDispatch();

  const nextAction = () => {
    if (workoutDays.length == 0) {
      alert("Você precisa treinar pelo menos 1 dia!");
      return;
    }

    navigation.navigate("StarterNivel" as never);
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "",
      headerRight: () => <NextButton text="Próximo" onPress={nextAction} />,
      headerRightContainerStyle: {
        marginRight: 10,
      },
    } as StackNavigationOptions);
  }, [workoutDays]);

  const toggleDay = (d: number) => {
    let newWorkoutDays = [...workoutDays];

    if (!workoutDays.includes(d)) {
      newWorkoutDays.push(d);
    } else {
      newWorkoutDays = newWorkoutDays.filter((i) => i != d);
    }

    dispatch({
      type: "SET_WORKOUTDAYS",
      payload: { workoutDays: newWorkoutDays },
    });
  };

  let firstName = name.split(" ")[0];

  return (
    <Container>
      <HeaderText>
        Opa, <BoldText>{firstName}</BoldText>, tudo bem?
      </HeaderText>
      <HeaderText>
        Quais <BoldText>dias da semana</BoldText> você pretende treinar?
      </HeaderText>

      <DaysArea>
        <DefaultButton
          bgcolor={
            workoutDays.includes(1) ? "rgba(148, 56, 245, 0.6)" : "rgba(148, 56, 245, 1)"
          }
          onPress={() => toggleDay(1)}
          style={{ marginBottom: 20 }}
          underlayColor="#CCC"
        >
          <TextDay>Segunda</TextDay>
        </DefaultButton>
        <DefaultButton
          bgcolor={
            workoutDays.includes(2) ? "rgba(148, 56, 245, 0.6)" : "rgba(148, 56, 245, 1)"
          }
          onPress={() => toggleDay(2)}
          style={{ marginBottom: 20 }}
          underlayColor="#CCC"
        >
          <TextDay>Terça</TextDay>
        </DefaultButton>
        <DefaultButton
          bgcolor={
            workoutDays.includes(3) ? "rgba(148, 56, 245, 0.6)" : "rgba(148, 56, 245, 1)"
          }
          onPress={() => toggleDay(3)}
          style={{ marginBottom: 20 }}
          underlayColor="#CCC"
        >
          <TextDay>Quarta</TextDay>
        </DefaultButton>
        <DefaultButton
          bgcolor={
            workoutDays.includes(4) ? "rgba(148, 56, 245, 0.6)" : "rgba(148, 56, 245, 1)"
          }
          onPress={() => toggleDay(4)}
          style={{ marginBottom: 20 }}
          underlayColor="#CCC"
        >
          <TextDay>Quinta</TextDay>
        </DefaultButton>
        <DefaultButton
          bgcolor={
            workoutDays.includes(5) ? "rgba(148, 56, 245, 0.6)" : "rgba(148, 56, 245, 1)"
          }
          onPress={() => toggleDay(5)}
          style={{ marginBottom: 20 }}
          underlayColor="#CCC"
        >
          <TextDay>Sexta</TextDay>
        </DefaultButton>
        <DefaultButton
          bgcolor={
            workoutDays.includes(6) ? "rgba(148, 56, 245, 0.50)" : "rgba(148, 56, 245, 1)"
          }
          onPress={() => toggleDay(6)}
          style={{ marginBottom: 20 }}
          underlayColor="#CCC"
        >
          <TextDay>Sábado</TextDay>
        </DefaultButton>
        <DefaultButton
          bgcolor={
            workoutDays.includes(0) ? "rgba(148, 56, 245, 0.6)" : "rgba(148, 56, 245, 1)"
          }
          onPress={() => toggleDay(0)}
          style={{ marginBottom: 20 }}
          underlayColor="#CCC"
        >
          <TextDay>Domingo</TextDay>
        </DefaultButton>
      </DaysArea>
    </Container>
  );
};

export default StarterDias;
