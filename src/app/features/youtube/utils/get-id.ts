const minNumber = 100;
const maxNumber = 1000;

export function getId() {
  const minCeiled = Math.ceil(minNumber);
  const maxFloored = Math.floor(maxNumber);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled).toString();
}
