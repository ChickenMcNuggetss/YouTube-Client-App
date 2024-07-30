import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VideoInfo, VideoResponse } from '@core/interfaces/video-info';
import { map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public searchVideos(searchValue: string) {
    const params = {
      part: 'snippet',
      type: 'video',
      q: searchValue
    };
    return this.http.get<VideoResponse>('/search', { params })
      .pipe(
        map(({ items }) => items),
        switchMap((videos: VideoInfo[]) => {
          const videoIds = videos.map((video: VideoInfo) => video.id.videoId);
          return this.getVideoInfo(videoIds);
        })
      );
  }

  getVideoInfo(videoIds: string[]) {
    const params = {
      part: [
        'snippet',
        'statistics',
        'id'
      ],
      resultsPerPage: 15,
      id: videoIds.join(','),
    };
    return this.http.get<VideoResponse>('/videos', { params });
  }
}
