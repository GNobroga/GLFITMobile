import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useSelector } from 'react-redux';

import HomeMonthScroll from '../../components/HomeMonthScroll';
import HomeDaysScroll from '../../components/HomeDaysScroll';
import HomeDayStatus from '../../components/HomeDayStatus';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationOptions } from '@react-navigation/stack';
import { IUser } from '../../reducers/userReducer';
import { View } from 'react-native';

const Container = styled.SafeAreaView`
    padding: 15px 0;
    background-color: #fff;
    flex: 1;
`;
const Legend = styled.View`
    width:90%;
    align-items:flex-start;
    margin-top:30px;
    gap: 4px;
`;
const LegendText = styled.Text`
    color:#555;
    font-size: 18px;
`;
const LegendItem = styled.View`
    flex-direction:row;
    align-items:center;
    margin-top:5px;
`;
const LegendBox = styled.View`
    width:20px;
    height:20px;
    background-color:#CCC;
    margin-right:5px;
`;

const ConfigButtonArea = styled.TouchableHighlight`
        width:30px;
        height:30px;
        justify-content:center;
        align-items:center;
    `;

const ConfigButtonImage = styled.Image`
    width:25px;
    height:25px;
`;

const Home = () => {


    let today = new Date();

    const [selectedMonth, setSelectedMonth] = useState(today.getMonth());
    const [selectedDay, setSelectedDay] = useState(today.getDate());
    const navigation = useNavigation();
    const dailyProgress = useSelector((user: IUser) => user.dailyProgress);
    const workoutDays = useSelector((user: IUser) => user.workoutDays);

    const ConfigButton = () => {
        const btnAction = () => {
            navigation.navigate('HomeConfig' as never);
        }
        return (
            <ConfigButtonArea onPress={btnAction} underlayColor="transparent">
                <ConfigButtonImage source={require('../../assets/config.png')} />
            </ConfigButtonArea>
        );
    }

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title:'Seu progresso diário',
            headerRight: () => <ConfigButton />,
            headerRightContainerStyle:{
                marginRight:10
            }
        } as StackNavigationOptions)
    }, [navigation]);

    return (
        <Container>
          <View>
            <HomeMonthScroll
                    selectedMonth={selectedMonth}
                    setSelectedMonth={setSelectedMonth}
                />
             <View style={{ marginTop: 10 }}>
                <HomeDaysScroll
                        selectedMonth={selectedMonth}
                        selectedDay={selectedDay}
                        setSelectedDay={setSelectedDay}

                        dailyProgress={dailyProgress}
                        workoutDays={workoutDays}
                    />
             </View>
               <View style={{ paddingHorizontal: 20 }}>
                <HomeDayStatus
                        selectedMonth={selectedMonth}
                        selectedDay={selectedDay}
                        setSelectedDay={setSelectedDay}
                        dailyProgress={dailyProgress}
                        workoutDays={workoutDays}
                        goToWorkout={() => navigation.navigate('WorkoutStack' as never)}
                    />
               </View>

                <Legend style={{ padding: 20}}>
                    <LegendText style={{ fontSize: 20 }}>Legenda:</LegendText>
                    <LegendItem>
                        <LegendBox style={{backgroundColor:'#B5EEFF'}}></LegendBox>
                        <LegendText>Hoje</LegendText>
                    </LegendItem>
                    <LegendItem>
                        <LegendBox style={{backgroundColor:'#B5FFB8'}}></LegendBox>
                        <LegendText>Treino feito</LegendText>
                    </LegendItem>
                    <LegendItem>
                        <LegendBox style={{backgroundColor:'#FFB5B5'}}></LegendBox>
                        <LegendText>Treino perdido</LegendText>
                    </LegendItem>
                    <LegendItem>
                        <LegendBox style={{backgroundColor:'#F4F4F4', opacity:0.2}}></LegendBox>
                        <LegendText>Dia de descanso</LegendText>
                    </LegendItem>
                    <LegendItem>
                        <LegendBox style={{backgroundColor:'#F4F4F4'}}></LegendBox>
                        <LegendText>Dia futuro</LegendText>
                    </LegendItem>
                </Legend>
          </View>
        </Container>
    );
}

export default Home;