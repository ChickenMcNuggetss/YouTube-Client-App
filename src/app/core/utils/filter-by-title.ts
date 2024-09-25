import { MixedList } from '@features/youtube/components/card-list/card-list.component';

export function filterByTitle(response: MixedList[], inputValue: string) {
  return response.filter(
    (el) => {
      if ('title' in el) {
        return el.title.toLowerCase().includes(inputValue.toLowerCase());
      }
      return el.snippet.title.toLowerCase().includes(inputValue.toLowerCase());
    }
  );
}
