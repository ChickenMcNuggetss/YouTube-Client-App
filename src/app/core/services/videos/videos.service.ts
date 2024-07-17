import { Injectable } from '@angular/core';
import { VideoInfo } from '@core/interfaces/video-info';
import { response } from '@features/youtube/response';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  public responseList: VideoInfo[] = response;

  public getVideo(id: string) {
    return this.responseList.find((el) => el.id === id);
  }
}
