import React from "react";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import RegistrationForm from "./features/registrationForm/RegistrationForm";

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
      <Title variant="h3">Welcome</Title>
      <RegistrationFormWrapper>
        <RegistrationFormCentered />
      </RegistrationFormWrapper>
    </Root>
  );
}

export default App;
