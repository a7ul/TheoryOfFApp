import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const LoaderContainer = styled.View`
    background-color: black;
    align-items:center;
    justify-content: center;
    ${props => (props.visible ? 'flex: 1;' : 'height: 0; width: 0')}
`;

export const LoaderText = styled.Text`
    color: #fff;
    font-size: 20px;
`;

export const IconText = styled(Animated.Text)`
    color: #fff;
    font-size:35px;
`;
export const Container = styled.View`
    ${props => (props.visible ? 'flex: 1;' : 'height: 0; width: 0')}
`;

