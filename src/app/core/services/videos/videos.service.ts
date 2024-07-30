import { Injectable } from '@angular/core';
import { VideoInfo } from '@core/interfaces/video-info';
// import { Observable } from 'rxjs/internal/Observable';

// import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class VideosService {
  public videosList!: VideoInfo[];

  public getVideo(id: string) {
    return this.videosList.find((listItem) => listItem.id.videoId === id);
  }
}
