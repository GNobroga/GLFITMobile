import React from 'react';
import styled from 'styled-components/native';
import { useDispatch, useSelector } from 'react-redux';
import Workout from '../../components/Workout';
import workoutJson from '../../presetWorkouts.json';
import { useNavigation } from '@react-navigation/native';
import { IUser } from '../../reducers/userReducer';
import IWorkout from '../../models/workout';
import { StackNavigationOptions } from '@react-navigation/stack';
import NextButton from '../../components/NextButton';


const Container = styled.SafeAreaView`
    flex:1;
    align-items:center;
    background-color:#FFF;
    padding: 10%;
`;
const HeaderText = styled.Text`
    font-size:18px;
    color:#333;
    text-align:center;
    margin-bottom:30px;
`;

const WorkoutList = styled.FlatList`
    width:100%;
`;

const StarterRecommendations = () => {
    const myWorkouts = useSelector((user: IUser) => user.myWorkouts);
    const navigation = useNavigation();
    const dispatch = useDispatch();

    let btnNext = 'Ignorar';

    if(myWorkouts.length > 0) {
        btnNext = 'Concluir';
    }

    const nextAction = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'StarterName' } as any], 
          });
    }

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title:'',
            headerRight: () => <NextButton text={btnNext} onPress={nextAction} />,
            headerRightContainerStyle:{
                marginRight:10
            }
        } as StackNavigationOptions);
    }, [myWorkouts]);


    const addWorkout = (item: IWorkout) => {
        if((myWorkouts.findIndex(i=>i.id==item.id) < 0)) {
            dispatch({ type: 'ADD_WORKOUT', payload: { workout: item }});
        } else {
            dispatch({ type: 'DEL_WORKOUT', payload: { workout: item }});
        }
    }

    return (
        <Container>
            <HeaderText>Opções de treino pré-criados com base no seu nível.</HeaderText>
            <HeaderText>Você selecionou {myWorkouts.length} treinos</HeaderText>
            
            <WorkoutList
                data={workoutJson as IWorkout[]}
                renderItem={({item})=>
                <Workout data={item} addAction={()=>addWorkout(item as IWorkout)}/>}
                keyExtractor={(item: any) => item.id}
            />
        </Container>
    );
}

export default StarterRecommendations;