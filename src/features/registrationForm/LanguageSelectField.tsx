import {
  Box,
  Chip,
  FormControl,
  FormHelperText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectProps
} from "@mui/material";
import styled from "@emotion/styled";
import { useLanguages } from "../common/hooks";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Root = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

const LanguagesSelectElement = styled(Select)`
  min-width: 440px;
`;

export interface LanguageSelectProps {
  className?: string;
  selectProps: SelectProps;
  error: boolean;
  helperText: string;
}

const LanguageSelectField = ({
  className,
  selectProps,
  error,
  helperText,
}: LanguageSelectProps) => {
  const languages = useLanguages();

  return (
    <Root className={className}>
      <FormControl error={error}>
        <LanguagesSelectElement
          id="language-select"
          multiple
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {(selected as string[]).map((language) => (
                <Chip key={language} label={language} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
          {...selectProps}
        >
          {languages.map((language) => (
            <MenuItem key={language} value={language}>
              {language}
            </MenuItem>
          ))}
        </LanguagesSelectElement>
        {error && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    </Root>
  );
};

export default LanguageSelectField;
