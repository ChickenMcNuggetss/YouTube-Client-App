import { Injectable } from '@angular/core';
import { ResponseItem } from '@core/interfaces/response';
import { response } from '@features/youtube/response';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  responseList: ResponseItem[] = response;

  public getVideo(id: string) {
    return this.responseList.find((el) => el.id === id);
  }
}
