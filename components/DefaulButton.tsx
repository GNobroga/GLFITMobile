import styled from 'styled-components/native';

interface IButtonProps {
    width?: string;
    bgcolor: string;
}

export default styled.TouchableHighlight<IButtonProps>`
    width:${props=> props.width || 'auto'};
    background-color:${props=>props.bgcolor || '#EEE'};
    padding:10px 10px;
    border-radius:100px;
    justify-content:center;
    align-items:center;
    height: 50px;
    font-size: 18px;
`;