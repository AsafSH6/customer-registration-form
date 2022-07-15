import {TextField, TextFieldProps} from "@mui/material";
import styled from "@emotion/styled";


const Root = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  > * {
    width: 40%;
  }
`;


export interface NameInputFieldProps {
  className?: string
  firstNameTextFieldProps?: TextFieldProps
  lastNameTextFieldProps?: TextFieldProps
}


const NameInputField = ({ className, firstNameTextFieldProps, lastNameTextFieldProps }: NameInputFieldProps) => {
  return (
    <Root className={className}>
      <TextField
        required
        label='First Name'
        {...firstNameTextFieldProps}
      />
      <TextField
        required
        label='Last Name'
        {...lastNameTextFieldProps}
      />
    </Root>
  )
}


export default NameInputField;