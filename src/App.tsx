import React from 'react';
import RegistrationForm from "./features/registrationForm/RegistrationForm";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";


const Root = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const Title = styled(Typography)`
  display: flex;
  justify-content: center;
`;

const RegistrationFormWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const RegistrationFormCentered = styled(RegistrationForm)`
  width: 50%;
  height: 100%;
`;


function App() {
  return (
  <Root>
    <Title variant='h3' >
      Welcome
    </Title>
    <RegistrationFormWrapper>
      <RegistrationFormCentered />
    </RegistrationFormWrapper>
    </Root>
  );
}

export default App;
