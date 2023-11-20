import { createStackNavigator } from "@react-navigation/stack";
import StarterIntro from "../screens/starter/StarterIntro";
import StarterName from "../screens/starter/StarterName";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import StarterDias from "../screens/starter/StarterDias";
import StarterNivel from "../screens/starter/StarterNivel";
import StarterRecommendations from "../screens/starter/StarterRecommendations";
import HomeTab from "./HomeTab";

const StackNavigator = createStackNavigator();

const ButtonLeft = styled.TouchableOpacity`
  padding: 10px;
`;

const ButtonLeftText = styled.Text`
  color: #9438f5;
  font-size: 18px;
`;

const StarterStack = () => {
  return (
    <StackNavigator.Navigator
      initialRouteName="StarterIntro"
      screenOptions={{
        headerLeft: () => {
          const navigation = useNavigation();

          return (
            <ButtonLeft onPress={() => navigation.goBack()}>
              <ButtonLeftText>Voltar</ButtonLeftText>
            </ButtonLeft>
          );
        },
        headerTitle: "",
      }}
    >
      <StackNavigator.Screen
        name="StarterIntro"
        component={StarterIntro}
        options={{
          header: () => null,
          headerStyle: {
            marginTop: 20
          }
        }}
      />
      <StackNavigator.Screen name="StarterName" component={StarterName} />
      <StackNavigator.Screen name="StarterDias" component={StarterDias} />
      <StackNavigator.Screen name="StarterNivel" component={StarterNivel} />
      <StackNavigator.Screen
        name="StarterRecommendations"
        component={StarterRecommendations}
      />
      <StackNavigator.Screen
        name="Principal"
        component={HomeTab}
        options={{
          header: () => null,
        }}
      />
    </StackNavigator.Navigator>
  );
};

export default StarterStack;
