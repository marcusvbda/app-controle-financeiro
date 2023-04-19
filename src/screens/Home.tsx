import { useCallback, useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { UserContext } from '../contexts/UserContext';
import styled from 'styled-components/native';

const ContainerStyled = styled(View)`
  flex: 1;
  background-color: #fefefe;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Home = ({navigation}:any) => {
  const {user,setUser} = useContext(UserContext);

  const handleClick = useCallback(() => {
    setUser({...user,...{name: 'Jane'}});
    navigation.navigate('Profile')
  }, [])

  return (
    <ContainerStyled>
      <Text>Home Screen</Text>
      <Button
        title="Go to Jane's profile"
        onPress={handleClick}
      />
    </ContainerStyled>
  );
}