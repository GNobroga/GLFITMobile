import React, { useState, useEffect, useRef } from 'react';
import { Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

const MonthScroll = styled.ScrollView`
    width:100%;
    height:60px;
`;

interface IMonthProps {
    width: number | string;
}

const MonthButton = styled.TouchableHighlight<IMonthProps>`
    width:${props=> props.width };
    justify-content:center;
    align-items:center;
`;
const MonthItem = styled.View`
    width:90%;
    height:30px;
    background-color:#EEE;
    border-radius:15px;
    justify-content:center;
    align-items:center;
`;
const MonthText = styled.Text``;

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
            ref={MonthRef}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
            snapToInterval={thirdW}
            contentContainerStyle={{paddingLeft:thirdW, paddingRight:thirdW}}
            onMomentumScrollEnd={handleScrollEnd}
        >
            {months.map((m, k)=>(
                <MonthButton key={k} width={thirdW} onPress={()=>setSelectedMonth(k)} underlayColor="transparent">
                    <MonthItem style={k==selectedMonth?{
                        backgroundColor:'#CCC',
                        width:'100%',
                        height:40
                    }:{}}>
                        <MonthText>{m}</MonthText>
                    </MonthItem>
                </MonthButton>
            ))}
        </ScrollView>
    );
}
