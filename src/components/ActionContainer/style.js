import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
   position: absolute;
   bottom: 30px;
   align-self: center;
   align-items: center;
   justify-content: center;
   flex-direction: row;
   padding: 0 20px;
`;

export const ActionIcon = styled(Icon)`
   color: ${props => (props.active ? 'white' : 'grey')};
   font-size: 25px;
   padding: 10px 20px;
   background-color: rgba(0,0,0,0.4);
   border-radius: 50;
`;

