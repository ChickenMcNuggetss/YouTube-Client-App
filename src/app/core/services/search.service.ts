import { Injectable } from '@angular/core';
import { response } from '@features/youtube/response';
import { ResponseItem } from '../interfaces/response';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  sortedResults: ResponseItem[] = []

  constructor() {}

  public searchByTitle(inputValue: string) {
    console.log(inputValue);
    const res = response.filter(el => {
      if (el.snippet.title.toLowerCase().includes(inputValue.toLowerCase())) return el;
      return;
    });
    this.sortedResults = []
    this.sortedResults = [...res]
    console.log(this.sortedResults);
    console.log(res);
  }

  public sortSearchResultsByViewDesc() {
    return response.sort(
      (a, b) => Number(b.statistics.viewCount) - Number(a.statistics.viewCount)
    );
  }

  public sortSearchResultsByViewAsc() {
    const res = response.sort(
      (a, b) => Number(b.statistics.viewCount) - Number(a.statistics.viewCount)
    );
    console.log(res);
  }

  public sortSearchResultsByDateDesc() {
    return response.sort(
      (a, b) => Number(b.snippet.publishedAt) - Number(a.snippet.publishedAt)
    );
  }
}
