const DAYS_IN_MONTH = 30;
const SEVEN_DAYS_IN_MONTHS = 7 / DAYS_IN_MONTH;
const YELLOW = '#fcba03';

export function chooseColor(dateStatus: number) {
  const convertedDateStatus = convertIntoMonths(dateStatus);
  if (convertedDateStatus > 6) {
    return 'red';
  }

  if (convertedDateStatus <= 6 && convertedDateStatus > 1) {
    return YELLOW;
  }

  if (convertedDateStatus <= 1 && convertedDateStatus > SEVEN_DAYS_IN_MONTHS) {
    return 'green';
  }

  return 'blue';
}

function convertIntoMonths(dateStatus: number) {
  return dateStatus / (1000 * 60 * 60 * 24 * DAYS_IN_MONTH);
}
