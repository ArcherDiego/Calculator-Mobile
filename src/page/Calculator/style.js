import styled from "styled-components/native";

export const Home = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #eee;
    border: 5px black;
    border-radius: 10px;
`;

export const Logo = styled.Image`
    width: 40px;
    height: 40px;
`;

export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

export const Title = styled.Text`
    font-family: 'Sofia';
    font-size: 1.5rem;
`;