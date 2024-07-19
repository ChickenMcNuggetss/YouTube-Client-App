import { VideoInfo } from '@core/interfaces/video-info';

export function filterByTitle(response: VideoInfo[], inputValue: string) {
  return response.filter((el) => el.snippet.title.toLowerCase().includes(inputValue.toLowerCase()));
}
