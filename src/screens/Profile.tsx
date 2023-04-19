import { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { UserContext } from '../contexts/UserContext';
import styled from 'styled-components/native';

const ContainerStyled = styled(View)`
  flex: 1;
  background-color: #fefefe;
  align-items: center;
  justify-content: center;
`;

export const Profile = ({navigation}:any) => {
  const {user} = useContext(UserContext);

  return (
    <ContainerStyled>
      <Text>Profile : {user.name}</Text>
      <Button
        title="Go back to home"
        onPress={() =>
          navigation.navigate('Home')
        }
      />
    </ContainerStyled>
  );
}