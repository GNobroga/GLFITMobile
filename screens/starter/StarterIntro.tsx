import React from "react";
import styled from "styled-components/native";
import DefaultButton from "../../components/DefaulButton";
import { useNavigation, useRoute } from "@react-navigation/native";

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 10%;
`;
const WelcomeText = styled.Text`
  font-size: 30px;
  color: #9438f5;
  margin-top: 50px;
`;
const WelcomeImage = styled.View`
  flex: 1;
  justify-content: center;
`;
const WelcomeLogo = styled.Image`
  object-fit: contain;
  width: 250px;
  height: 250px;
`;
const BeginConfigArea = styled.View`
  width: 100%;
  margin-bottom: 50px;
`;
const ButtonText = styled.Text`
  color: #fff;
  font-size: 20px;
`;

const StarterIntro = () => {
  const navigation = useNavigation();

  const start = () => {
    navigation.navigate("StarterName" as never);
  };

  return (
    <Container>
      <WelcomeText>Seja bem vindo(a)</WelcomeText>
      <WelcomeImage>
        <WelcomeLogo source={require("../../assets/logo.png")} />
      </WelcomeImage>
      <BeginConfigArea>
        <DefaultButton
          width="100%"
          bgcolor="#9438F5"
          underlayColor="#0B7AC6"
          onPress={start}
        >
          <ButtonText>Iniciar</ButtonText>
        </DefaultButton>
      </BeginConfigArea>
    </Container>
  );
};

export default StarterIntro;
