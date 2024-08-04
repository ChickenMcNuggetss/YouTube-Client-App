import { VideoInfo } from '@core/interfaces/video-info';

export interface State {
  youtubeVideos: VideoInfo[],
  customVideos: VideoInfo[],
  currentPage: number,
}
