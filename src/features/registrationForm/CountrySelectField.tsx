import {FormControl, FormHelperText, MenuItem, Select} from "@mui/material";
import {SelectProps} from "@mui/material/Select";
import {useCountries} from "../common/hooks";
import styled from "@emotion/styled";


const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

const CountrySelectElement = styled(Select)`
  min-width: 240px;
`;


export interface CountrySelectProps {
  className?: string
  selectProps?: SelectProps
  error: boolean
  helperText: string
}


const CountrySelectField = ({ className, selectProps, error, helperText }: CountrySelectProps) => {
  const countries = useCountries();

  return (
    <Root className={className}>
      <FormControl error={error}>
        <CountrySelectElement
          id='country-select'
          {...selectProps}
        >
            {countries.map((country, idx) => (
              <MenuItem
                key={idx}
                value={country}
              >
                {country}
              </MenuItem>
            ))}
        </CountrySelectElement>
        {error && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    </Root>
  )
}


export default CountrySelectField;