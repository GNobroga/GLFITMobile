import React, { useState, useEffect, useRef } from 'react';
import { Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface IMonthProps {
    width: number | string;
}

const MonthButton = styled.TouchableHighlight<IMonthProps>`
    width:${props=> props.width + 'px'};
    justify-content:center;
    align-items:center;
`;
const MonthItem = styled.View`
    width: 100%;
    height:50px;
    background-color:#EEE;
    border-radius:15px;
    justify-content:center;
    align-items:center;
`;
const MonthText = styled.Text`
    font-size: 18px;
`;

let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
const screenWidth = Math.round(Dimensions.get('window').width);
let thirdW = screenWidth / 3;

interface IProps {
    selectedMonth: number;
    setSelectedMonth: React.Dispatch<React.SetStateAction<number>>;
}

export default (props: IProps) => {
    const MonthRef = useRef<ScrollView | null>(null);

    const [selectedMonth, setSelectedMonth] = useState(props.selectedMonth);

    const handleScrollEnd = (e: any) => {
        let posX = e.nativeEvent.contentOffset.x;
        let targetMonth = Math.round( posX / thirdW );
        setSelectedMonth(targetMonth);
    }

    const scrollToMonth = (m: number) => {
        let posX = m * thirdW;
        MonthRef.current!?.scrollTo({x:posX, y:0, animated:true});
    }

    useEffect(()=>{
        props.setSelectedMonth(selectedMonth);
    }, [selectedMonth]);

    useEffect(()=>{
        setTimeout(()=>{
            scrollToMonth(selectedMonth);
        }, 10);        
    }, [props.selectedMonth]);

    return (
        <ScrollView
            style={{ width: '100%', height: 60, }}
            ref={MonthRef}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
            snapToInterval={thirdW}
            contentContainerStyle={{paddingLeft:thirdW, paddingRight:thirdW, gap: 10}}
            onMomentumScrollEnd={handleScrollEnd}
        >
            {months.map((m, k)=>(
                <MonthButton key={k} width={thirdW} onPress={()=>setSelectedMonth(k)} underlayColor="transparent">
                    <MonthItem style={k==selectedMonth ? {
                        backgroundColor:'#9B7AE6', 
                        width:'100%',
                        height:50
                    }:{}}>
                        <MonthText style={k==selectedMonth ? { color: '#fff'} : {}}>{m}</MonthText>
                    </MonthItem>
                </MonthButton>
            ))}
        </ScrollView>
    );
}
