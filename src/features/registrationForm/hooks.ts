import React, {useCallback, useState} from "react";


const useFirstNameField =
  (initialValue: string): [string, (event: React.ChangeEvent<HTMLInputElement>) => void, () => boolean, string] => {
  const [firstName, setFirstName] = useState<string>(initialValue);
  const [firstNameError, setFirstNameError] = useState<string>('');

  const onFirstNameChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstNameError('');
    setFirstName(event.target.value);
  }, []);

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
  const [lastName, setLastName] = useState<string>(initialValue);
  const [lastNameError, setLastNameError] = useState<string>('');

  const onLastNameChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setLastNameError('');
    setLastName(event.target.value);
  }, []);

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
    const [birthday, setBirthday] = useState<Date | null>(initialValue);

    const onBirthdayChange = useCallback((value: Date | null) => {
      setBirthday(value);
    }, []);

    const validateBirthday = useCallback(() => {
      return birthday !== null;
    }, [birthday]);

    return [birthday, onBirthdayChange, validateBirthday];
};


export {
  useFirstNameField,
  useLastNameField,
  useBirthdayField
}