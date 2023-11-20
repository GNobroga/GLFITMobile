import React from "react";
import styled from "styled-components/native";
import useMuscleImage from "../hooks/useMuscleImage";
import { ImageBackground } from "react-native";

const Container = styled.View`
  background-color: #fff;
  flex-direction: row;
  height: 100px;
`;

const Tab = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const TabWorkout = styled.TouchableOpacity`
  background-color: #9438f5;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  position: relative;
  height: 100px;
  width: 100px;
  bottom: 20px;
`;

const TabWorkoutImage = styled.ImageBackground`
  width: 30px;
  height: 30px;
`;

const icons = {
  Home: require("../assets/Principal.png"),
  User: require("../assets/User.png"),
  Ranking: require("../assets/Ranking.png"),
  Cart: require("../assets/Cart.png"),
};

function CustomTabBar({ state, descriptors, navigation }: any) {
  return (
    <Container>
      {state.routes.map((route: any, index: number) => {
        let routeName = route.name;

        const isFocused = state.index === index;

        const goPage = () => {
            navigation.navigate(route.name, route.params);
        }

        if (routeName === "Workout") {
          return (
            <TabWorkout key={index} onPress={goPage} style={isFocused ? { opacity: 0.8 } : {}}>
              <TabWorkoutImage
                style={{ width: 40, height: 40}}
                source={require("../assets/dumbbell.png")}
              />
            </TabWorkout>
          );
        }

        return (
          <Tab key={index} onPress={goPage} style={isFocused ? { opacity: 0.4 } : {}}>
            <TabWorkoutImage source={icons[routeName as keyof typeof icons]} />
          </Tab>
        );
      })}
    </Container>
  );
}

export default CustomTabBar;
