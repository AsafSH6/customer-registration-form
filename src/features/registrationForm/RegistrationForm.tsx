import styled from '@emotion/styled'

import Paper from '@mui/material/Paper';
import React, {useMemo} from "react";
import {Divider, Typography} from "@mui/material";
import {useBirthdayField, useFirstNameField, useLastNameField} from "./hooks";
import NameInputField from "./NameInputField";
import BirthdayInputField from "./BirthdayInputField";



const Root = styled(Paper)`
`;

const Title = styled(Typography)`
  margin: 16px;
`;

const Fields = styled.div`
  > * {
      margin-top: 24px;
      margin-left: 32px;
    }  
`;

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export interface RegistrationFormProps {
  className?: string
}


const RegistrationForm = ({ className } : RegistrationFormProps ) => {
  const [firstName, onFirstNameChange, validateFirstName, firstNameError] = useFirstNameField('');
  const [lastName, onLastNameChange, validateLastName, lastNameError] = useLastNameField('');
  const [birthday, onBirthdayChange, validateBirthday] = useBirthdayField(new Date());

  return (
    <Root className={className}>
      <Title variant='h4'>
        Customer Registration Form
      </Title>
      <Divider />
      <Fields>
        <FieldWrapper>
          <Typography variant='h6'>Name</Typography>
          <NameInputField
            firstNameTextFieldProps={{
              value: firstName,
              onChange: onFirstNameChange,
              error: useMemo(() => firstNameError !== '', [firstNameError]),
              helperText: firstNameError
            }}
            lastNameTextFieldProps={{
              value: lastName,
              onChange: onLastNameChange,
              error: useMemo(() => lastNameError !== '', [lastNameError]),
              helperText: lastNameError
            }}
          />
        </FieldWrapper>
        <FieldWrapper>
          <Typography variant='h6'>Birthday</Typography>
          <BirthdayInputField
            value={birthday}
            onChange={onBirthdayChange}
          />
        </FieldWrapper>
      </Fields>
    </Root>
  )
};


export default RegistrationForm;