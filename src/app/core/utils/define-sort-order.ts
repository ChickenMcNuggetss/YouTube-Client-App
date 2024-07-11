import { SortingVariant } from '@core/types/sorting-types';

export function defineSortOrder(sortCriteria: SortingVariant) {
  return sortCriteria.includes('desc') ? -1 : 1;
}
