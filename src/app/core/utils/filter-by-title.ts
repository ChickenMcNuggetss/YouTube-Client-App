import { VideoInfo } from '@core/interfaces/video-info';
import { Card } from 'app/store/interfaces/card';

export function filterByTitle(response: (VideoInfo | Card)[], inputValue: string) {
  return response.filter(
    (el) => {
      if ('title' in el) {
        return el.title.toLowerCase().includes(inputValue.toLowerCase());
      }
      return el.snippet.title.toLowerCase().includes(inputValue.toLowerCase());
    }
  );
}
