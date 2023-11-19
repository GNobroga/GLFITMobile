
import { GestureResponderEvent } from "react-native/Libraries/Types/CoreEventTypes";
import styled from "styled-components/native";

const ButtonNext = styled.TouchableOpacity`
    padding: 10px;
    background-color: transparent;
`;

const ButtonNextText = styled.Text`
    color: #9438F5;
    font-size: 18px;
`;

interface IProps {
    text: string;
    onPress: ((event: GestureResponderEvent) => void);
}

const NextButton = ({ text, onPress }: IProps) => {
    return <ButtonNext  onPress={onPress} >
        <ButtonNextText>{text}</ButtonNextText>
    </ButtonNext>
}

export default NextButton;