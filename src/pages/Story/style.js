import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background: black;
  padding: 10px 10px 0 10px;
`;

export const Title = styled.Text`
  color: white;
  text-decoration: underline;
  font-size: 20px;
  text-align: center;
`;

export const Story = styled.Text`
  color: white;
  font-size: 20px;
  text-align: center;
`;

export const Button = styled.TouchableOpacity`
  padding: 10px 0;
  background: #607D8B;
  margin: 0 30px;
  border-radius: 10px;
`;
export const BtnText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  padding: 10px 0;
`;
