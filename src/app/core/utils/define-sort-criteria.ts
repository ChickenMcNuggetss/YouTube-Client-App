export function defineSortCriteria({
  order,
  firstValue,
  secondValue,
}: {
  order: number;
  firstValue: number;
  secondValue: number;
}) {
  return order * (firstValue - secondValue);
}
