import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VideoResponse } from '@core/interfaces/video-info';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getVideos() {
    return this.http.get<VideoResponse>('/videos');
  }
}
