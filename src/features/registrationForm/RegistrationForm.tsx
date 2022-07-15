import styled from '@emotion/styled'

import Paper from '@mui/material/Paper';
import React, {useMemo, useState} from "react";
import {Button, Divider, Snackbar, Typography} from "@mui/material";
import {
  useBirthdayField,
  useCountrySelectField,
  useFirstNameField,
  useLanguagesSelectField,
  useLastNameField
} from "./hooks";
import NameInputField from "./NameInputField";
import BirthdayInputField from "./BirthdayInputField";
import CountrySelectField from "./CountrySelectField";
import LanguageSelectField from "./LanguageSelectField";
import PreviousJobs from "./PreviousJobs";



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

const SubmitFooter = styled.div`
  display: flex;
  justify-content: center;
  margin: 8px;
`;

const PreviousJobsWrapper = styled.div`
  flex: 1;
  margin: 16px;
`;

export interface RegistrationFormProps {
  className?: string
}


const RegistrationForm = ({ className } : RegistrationFormProps ) => {
  const [firstName, onFirstNameChange, validateFirstName, firstNameError] = useFirstNameField('');
  const [lastName, onLastNameChange, validateLastName, lastNameError] = useLastNameField('');
  const [birthday, onBirthdayChange, validateBirthday] = useBirthdayField(new Date());
  const [country, onCountrySelect, validateCountry, countryError] = useCountrySelectField('');
  const [languages, onLanguagesSelect, validateLanguages, languagesError] = useLanguagesSelectField([]);
  const [openSnackbar, setSnackbarOpen] = useState<boolean>(false);

  const validateFields = () => {
    const validators = [
      validateFirstName,
      validateLastName,
      validateBirthday,
      validateCountry,
      validateLanguages
    ];

    let hasError = false;
    for(let validator of validators) {
      if (!validator()) {
        hasError = true
      }
    }

    return hasError;
  }

  const onSubmit = () => {
    if (!validateFields()) {
      setSnackbarOpen(true);
    }
  };

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
        <FieldWrapper>
          <Typography variant='h6'>Country</Typography>
          <CountrySelectField
            error={useMemo(() => countryError !== '', [countryError])}
            helperText={countryError}
            selectProps={{
              value: country,
              onChange: onCountrySelect,
            }}
          />
        </FieldWrapper>
        <FieldWrapper>
          <Typography variant='h6'>Languages</Typography>
          <LanguageSelectField
            error={useMemo(() => languagesError !== '', [languagesError])}
            helperText={languagesError}
            selectProps={{
              value: languages,
              onChange: onLanguagesSelect
          }}
          />
        </FieldWrapper>
      </Fields>
      <PreviousJobsWrapper>
        <PreviousJobs />
      </PreviousJobsWrapper>
      <SubmitFooter>
        <Button
          onClick={onSubmit}
          variant="outlined"
        >
          Submit
        </Button>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={() => setSnackbarOpen(false)}
          message="Submitted"
        />
      </SubmitFooter>
    </Root>
  )
};


export default RegistrationForm;