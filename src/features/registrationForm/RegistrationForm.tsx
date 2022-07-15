import styled from '@emotion/styled'

import Paper from '@mui/material/Paper';
import React from "react";
import {Divider, Typography} from "@mui/material";



const Root = styled(Paper)`
`;

const Title = styled(Typography)`
  margin: 16px;
`;

export interface RegistrationFormProps {
  className?: string
}


const RegistrationForm = ({ className } : RegistrationFormProps ) => {

  return (
    <Root className={className}>
      <Title variant='h4'>
        Customer Registration Form
      </Title>
      <Divider />
    </Root>
  )
};



export default RegistrationForm;