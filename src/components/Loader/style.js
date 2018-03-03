import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const LoaderContainer = styled.View`
    flex: 1;
    background-color: black;
    align-items:center;
    justify-content: center;
`;

export const LoaderText = styled.Text`
    color: #fff;
    font-size: 20px;
`;

export const IconText = styled(Animated.Text)`
    color: #fff;
    font-size:35px;
`;

