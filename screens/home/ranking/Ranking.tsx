import { Text } from "react-native"
import styled from "styled-components/native";

const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const Ranking = () => {
    return (
        <Container>
            <Text style={{ fontSize: 20 }}>Gabriel e Lívia Working!</Text>
        </Container>
    )
}

export default Ranking;