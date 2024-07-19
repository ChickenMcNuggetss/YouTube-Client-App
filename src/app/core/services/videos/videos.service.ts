import { Injectable } from '@angular/core';
import { VideoInfo } from '@core/interfaces/video-info';
import { video } from '@features/youtube/video';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  public videosList: VideoInfo[] = video;

  public getVideo(id: string) {
    return this.videosList.find((listItem) => listItem.id === id);
  }
}
