import {countries, languages} from "./consts";

// Note: would be better to fetch countries from some API since it may change from time to time..
const useCountries = () => {
  return countries;
};

const useLanguages = () => {
  return languages;
};


export {
  useCountries,
  useLanguages,
}