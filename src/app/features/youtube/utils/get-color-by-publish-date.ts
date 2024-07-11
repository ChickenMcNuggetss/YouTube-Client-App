import { Colors } from '../enums/colors';

const DAYS_IN_MONTH = 30;
const WEEK_CONVERTED_TO_MONTH = 7 / DAYS_IN_MONTH;

function convertIntoMonths(dateStatus: number) {
  return dateStatus / (1000 * 60 * 60 * 24 * DAYS_IN_MONTH);
}

export function getColorByPublishDate(dateStatus: number) {
  const convertedDateStatus = convertIntoMonths(dateStatus);
  if (convertedDateStatus > 6) {
    return Colors.Red;
  }

  if (convertedDateStatus <= 6 && convertedDateStatus > 1) {
    return Colors.Yellow;
  }

  if (
    convertedDateStatus <= 1
    && convertedDateStatus > WEEK_CONVERTED_TO_MONTH
  ) {
    return Colors.Green;
  }

  return Colors.Blue;
}
