import { isNil } from 'taninsam';
import { MonthYear, NB_MONTHS_PER_YEAR } from './month-year';

export function monthToYears(nbMonths: number): MonthYear {
  if (isNil(nbMonths)) {
    return nbMonths;
  }
  return {
    nbMonths: nbMonths % NB_MONTHS_PER_YEAR,
    nbYears: Math.floor(nbMonths / NB_MONTHS_PER_YEAR)
  };
}
