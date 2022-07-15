import styled from "@emotion/styled";
import {DesktopDatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {TextField} from "@mui/material";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

const Root = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;


export interface BirthdayInputFieldProps {
  className?: string
  value: Date  |null
  onChange: (value: Date | null) => void
}

const BirthdayInputField = ({ className, value, onChange }: BirthdayInputFieldProps) => {
  return (
    <Root className={className}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
       <DesktopDatePicker
         disableFuture
         label="Date of birth"
         inputFormat="DD/MM/YYYY"
         value={value}
         onChange={onChange}
         renderInput={
          (params) => (
            <TextField
              {...params}
            />
          )
       }
        />
      </LocalizationProvider>
    </Root>
  );
}


export default BirthdayInputField