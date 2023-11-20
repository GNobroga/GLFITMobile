import { ImageBackground, Text, View, TouchableHighlight } from "react-native";

import styled from "styled-components/native";

const Container = styled.SafeAreaView`
    flex: 1;
    gap: 10px;
    background-color: #fff;
`;

const Menu = styled.View`
    flex-direction: row;
    gap: 10px;
`

const MenuItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    height: 40px;
`;

const MenuItemText = styled.Text`
    font-size: 18px;
`;

const Title = styled.Text`
    font-weight: bold;
    font-size: 32px;
`;

const Wrapper = styled.View`
    align-items: center;
`;

const Line = styled.View`
    width: 90%;
    background-color: #ede9f2;
    height: 1px;
`;

const Profile = styled.View`
    gap: 8px;
    align-items: center;
`;

const PointArea = styled.View`
    background-color: #ede9f2;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    flex: 1;
`;

const PointLabel = styled.Text`
    font-weight: bold;
    font-size: 18px;
    flex: 1;
`;

const PointItem = styled.View`
    gap: 5px;
    justify-content: center;
    align-items: center;
    flex: 1;
`;

const PointItemText = styled.Text`
    opacity: 0.7;
    font-size: 17px;
`;

const PointItemTextPoint = styled.Text`
    color: #9438F5;
    font-size: 17px;
    font-weight: bold;
`;

const UserHeader = () => {
    return (
        <Container>
            <View style={{ padding: 10, gap: 15}}>
                <Title>Home</Title>
                <Menu>
                    <MenuItem style={{ backgroundColor: '#9438F5'}}>
                        <MenuItemText style={{ color: '#fff', }}>Home</MenuItemText>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemText>Ficha</MenuItemText>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemText>Treinos</MenuItemText>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemText>Pontos</MenuItemText>
                    </MenuItem>
                </Menu>

            </View>
            <Wrapper>
                <Line></Line>
            </Wrapper>
            <Profile>
                <ImageBackground source={require('../../assets/Photo.png')} style={{ width: 125, height: 125}}/>
                <Title style={{ fontWeight: '400', fontSize: 22}}>Gabriel</Title>
                <Text style={{ fontSize: 18, opacity: 0.5 }}>Castelo - ES</Text>
            </Profile>
            <PointArea>
                <PointLabel>Pontos</PointLabel>
                <PointItem>
                    <PointItemText>Hoje</PointItemText>
                    <PointItemTextPoint>300</PointItemTextPoint>
                </PointItem>
                <PointItem>
                    <PointItemText>Mês</PointItemText>
                    <PointItemTextPoint>300</PointItemTextPoint>
                </PointItem>
                <PointItem>
                    <PointItemText>Ano</PointItemText>
                    <PointItemTextPoint>300</PointItemTextPoint>
                </PointItem>
            </PointArea>
            <View style={{ paddingHorizontal: 10, flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{ fontSize: 18, fontWeight: 'bold'}}>TREINOS</Text>
                <Text style={{ backgroundColor: '#9438F5', color: '#fff', padding: 5, borderRadius: 10 }}>Ver mais</Text>
            </View>
            <Wrapper>
                <Line style={{ width: '100%'}}></Line>
            </Wrapper>
            <View style={{ flex: 1,  paddingHorizontal: 10 }}>
                <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center'}}>
                    <ImageBackground style={{ width: 80, height: 80 }} source={require('../../assets/image_group.png')}/>
                    <View style={{ gap: 5}}>
                        <Text style={{ fontWeight: 'bold'}}>Bumbum guloso</Text>
                        <Text>3 séries de 200</Text>
                    </View>
                </View>
            </View>
            <Wrapper>
                <Line style={{ width: '100%'}}></Line>
            </Wrapper>
        </Container>
    );
}

export default UserHeader;