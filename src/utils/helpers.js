import constants from '../config/string-constants';

export function extractDate(date) {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const dateString = year + '-' + (month + 1) + '-' + day;
  return dateString;
}

export function convertObjectValuesToArray(obj) {
  const myArray = [];
  Object.keys(obj).forEach((key) => {
    myArray.push(obj[key]);
  });
  return myArray;
}

export function errorMessageString(errorsArray) {
  let finalErrorString = '';
  errorsArray.map((error) => {
    const errorString = error.toString();
    if (errorString === constants.emailExistError) {
      finalErrorString += 'A booking with provided email already exists.';
    } else if (errorString === constants.phoneExistError) {
      finalErrorString += 'A booking with provided phone number already exists.';
    }
  });
  return finalErrorString;
}
