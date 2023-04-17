import styled from "styled-components/native";

export const LcdDisplay = styled.View`
    margin: 15px;
    width: 80%;
    height: 100px;
    border: 1px black;
    border: 2.5px gray;
    border-radius: 5px;
    background-color: lightgray;
`;

export const CountLine = styled.Text`
    margin: 5px 10px;
    font-family: 'Arcade';
    font-size: 2rem;
`;

export const ResultLine = styled.Text`
    margin: 5px 10px;
    width: 80%;
    font-family: 'Digital-7';
    font-size: 2.5rem;
    text-align: right;
`;
