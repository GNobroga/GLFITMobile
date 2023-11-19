import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import DefaultButton from './DefaulButton';
import { useDispatch } from 'react-redux';

const BalloonTriangle = styled.View`
    width:0;
    height:0;
    borderLeftColor:transparent;
    borderLeftWidth:15;
    borderBottomWidth:15;
    borderBottomColor:#EDEDED;
    borderRightWidth:15;
    borderRightColor:transparent;
`;
const BalloonArea = styled.View`
    width:90%;
    padding:20px;
    background-color:#EDEDED;
    border-radius:10px;
`;
const BalloonBigText = styled.Text`
    font-size:15px;
    align-self:center;
`;
const ButtonText = styled.Text`
    color:#FFF;
    font-weight:bold;
`;
const BalloonText = styled.Text`
    font-size:13px;
    align-self:center;
    margin-top:10px;
`;
const Strong = styled.Text`
    font-weight:bold;
`;

interface IProps {
    selectedMonth: number;
    setSelectedMonth?: React.Dispatch<React.SetStateAction<number>>;
    selectedDay: number;
    setSelectedDay: React.Dispatch<React.SetStateAction<number>>;
    dailyProgress: string[];
    workoutDays: number[];
    goToWorkout: () => any;
}

export default (props: IProps) => {

    const dispatch = useDispatch();

    let today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);

    let thisDate = new Date(today.getFullYear(), props.selectedMonth, props.selectedDay);

    let thisYear: string | number = thisDate.getFullYear();
    let thisMonth: string | number = thisDate.getMonth() + 1;
    let thisDay: string | number = thisDate.getDate();
    thisMonth = (thisMonth<10)?'0'+thisMonth:thisMonth;
    thisDay = (thisDay<10)?'0'+thisDay:thisDay;
    let dFormated = `${thisYear}-${thisMonth}-${thisDay}`;

    let dayOff = false;
    let isToday = false;
    let isFuture = false;
    let isDone = false;

    if(!props.workoutDays.includes(thisDate.getDay())) {
        dayOff = true;
    } else if(thisDate.getTime() > today.getTime()) {
        isFuture = true;
    } else {
        if(props.dailyProgress.includes(dFormated)) {
            isDone = true;
        } else {
            isDone = false;
        }
    }

    if(thisDate.getTime() == today.getTime()) {
        isToday = true;
    }

    const setDone = () => {
        dispatch({ type: 'ADD_PROGRESS', payload: { date: dFormated }});
    }
    const setUnDone = () => {
        dispatch({ type: 'DEL_PROGRESS', payload: { date: dFormated }});
    }

    const [timeLeft, setTimeLeft] = useState('');

    useEffect(()=>{
        const timerFunction = () => {
            let now = Date.now();
            let endToday: Date | number = new Date();
            endToday.setHours(23);
            endToday.setMinutes(59);
            endToday.setSeconds(59);
            endToday = endToday.getTime();
            let diff = endToday - now;

            let h: number | string = Math.floor(diff / (1000 * 60 * 60));
            let m: number | string = Math.floor((diff / (1000 * 60)) - (h * 60));
            let s: number | string = Math.floor( (diff / 1000) - (m*60) - ((h*60)*60) );

            h = h<10?'0'+h:h;
            m = m<10?'0'+m:m;
            s = s<10?'0'+s:s;

            setTimeLeft(`${h}h ${m}m ${s}s`);
        }
        let timer = setInterval(timerFunction, 1000);
        timerFunction();

        return ()=>clearInterval(timer);
    }, []);

    return (
        <>
            <BalloonTriangle></BalloonTriangle>
            <BalloonArea>
                {dayOff &&
                    <BalloonBigText>Dia de descanso!</BalloonBigText>
                }
                {isFuture &&
                    <BalloonBigText>Data no futuro</BalloonBigText>
                }
                {!dayOff && !isFuture && isDone &&
                    <>
                        <BalloonBigText><Strong>Parabéns</Strong>, você treinou!</BalloonBigText>
                        <DefaultButton onPress={setUnDone} underlayColor="#4AC34E" bgcolor="#4AC34E" style={{marginTop:20}}>
                            <ButtonText>DESMARCAR</ButtonText>
                        </DefaultButton>
                    </>
                }
                {!dayOff && !isFuture && !isDone && !isToday &&
                    <>
                        <BalloonBigText><Strong>Fraco!</Strong> Você falhou neste dia.</BalloonBigText>
                        <DefaultButton onPress={setDone} underlayColor="#4AC34E" bgcolor="#4AC34E" style={{marginTop:20}}>
                            <ButtonText>MARCAR COMO FEITO</ButtonText>
                        </DefaultButton>
                    </>
                }
                {!dayOff && !isFuture && !isDone && isToday &&
                    <>
                        <BalloonBigText><Strong>HOJE TEM TREINO 🚀</Strong></BalloonBigText>
                        <BalloonText>Você tem {timeLeft} para treinar</BalloonText>
                        <DefaultButton onPress={props.goToWorkout} underlayColor="#4AC34E" bgcolor="#4AC34E" style={{marginTop:20}}>
                            <ButtonText>INICIAR TREINO</ButtonText>
                        </DefaultButton>
                    </>
                }
            </BalloonArea>
        </>
    );
}
