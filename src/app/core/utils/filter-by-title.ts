import { ResponseItem } from '@core/interfaces/response';

export function filterByTitle(response: ResponseItem[], inputValue: string) {
  return response.filter((el) => el.snippet.title.toLowerCase().includes(inputValue.toLowerCase()));
}
