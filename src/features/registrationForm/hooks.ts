import React, {useCallback, useState} from "react";
import {SelectChangeEvent} from "@mui/material";
import {useLocalStorage} from "../common/hooks";


const useFirstNameField =
  (initialValue: string): [string, (event: React.ChangeEvent<HTMLInputElement>) => void, () => boolean, string] => {
  const [firstName, setFirstName] = useLocalStorage<string>('firstName-input', initialValue);
  const [firstNameError, setFirstNameError] = useState<string>('');

  const onFirstNameChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstNameError('');
    setFirstName(event.target.value);
  }, [setFirstName]);

  const validateFirstName = useCallback(() => {
    if(firstName.trim() === '') {
      setFirstNameError("First name can't be empty");
      return false;
    }

    return true;
  }, [firstName]);

  return [firstName, onFirstNameChange, validateFirstName, firstNameError];
};


const useLastNameField =
  (initialValue: string): [string, (event: React.ChangeEvent<HTMLInputElement>) => void, () => boolean, string] => {
  const [lastName, setLastName] = useLocalStorage<string>('lastName-input', initialValue);
  const [lastNameError, setLastNameError] = useState<string>('');

  const onLastNameChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setLastNameError('');
    setLastName(event.target.value);
  }, [setLastName]);

  const validateLastName = useCallback(() => {
    if(lastName.trim() === '') {
      setLastNameError("Last name can't be empty");
      return false;
    }

    return true;
  }, [lastName]);

  return [lastName, onLastNameChange, validateLastName, lastNameError];
};

const useBirthdayField =
  (initialValue: Date): [Date | null, (value: Date | null) => void, () => boolean] => {
    const [birthday, setBirthday] = useLocalStorage<Date | null>('birthday-input', initialValue);

    const onBirthdayChange = useCallback((value: Date | null) => {
      setBirthday(value);
    }, [setBirthday]);

    const validateBirthday = useCallback(() => {
      return birthday !== null;
    }, [birthday]);

    return [birthday, onBirthdayChange, validateBirthday];
};

const useCountrySelectField =
  (initialValue: string): [string, (event: SelectChangeEvent<unknown>, child: React.ReactNode) => void, () => boolean, string] => {
    const [country, setCountry] = useLocalStorage<string>('country-input', initialValue);
    const [countryError, setCountryError] = useState<string>('');

    const onCountrySelect = useCallback((event: SelectChangeEvent<unknown>, child: React.ReactNode) => {
      setCountryError('');
      setCountry(event.target.value as string);
    }, [setCountry]);

  const validateCountry = useCallback(() => {
      if (country.trim() === '') {
        setCountryError("Country can't be empty");
        return false;
      }

      return true;
    }, [country]);

    return [country, onCountrySelect, validateCountry, countryError];
}

const useLanguagesSelectField =
  (initialValue: string[]): [string[], (event: SelectChangeEvent<unknown>, child: React.ReactNode) => void, () => boolean, string] => {
  const [languages, setLanguages] = useLocalStorage<string[]>('languages-input', initialValue);
    const [languagesError, setLanguagesError] = useState<string>('');

  const onLanguagesSelect = useCallback((event: SelectChangeEvent<unknown>, child: React.ReactNode) => {
    const {
      target: { value },
    } = event;
    setLanguagesError('');
    setLanguages(value as string[]);
  }, [setLanguages]);

  const validateLanguages = useCallback(() => {
      if (languages.length === 0) {
        setLanguagesError("Languages can't be empty");
        return false;
      }

      return true;
    }, [languages]);

    return [languages, onLanguagesSelect, validateLanguages, languagesError];
};


export {
  useFirstNameField,
  useLastNameField,
  useBirthdayField,
  useCountrySelectField,
  useLanguagesSelectField,
}