import { VideoInfo } from '@core/interfaces/video-info';

const baseSortValue = 'view';

export function setSortValue(sortBy: string, value: VideoInfo) {
  return sortBy === baseSortValue ? Number(value.statistics.viewCount) : new Date(value.snippet.publishedAt).getTime();
}
