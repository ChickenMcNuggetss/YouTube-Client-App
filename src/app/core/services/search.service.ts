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
    this.sortedResults = [...res]
  }

  public sortBy(sortCriteria: string) {
    let sortOrder = 1;
  
    if (sortCriteria.includes('desc')) {
      sortOrder = -1;
    }
  
    const res = this.sortedResults.sort((a, b) => {
      if (sortCriteria.includes('view')) {
        return sortOrder * (Number(b.statistics.viewCount) - Number(a.statistics.viewCount));
      } else if (sortCriteria.includes('date')) {
        const dateA = new Date(a.snippet.publishedAt).getTime();
        const dateB = new Date(b.snippet.publishedAt).getTime();
        return sortOrder * (dateB - dateA); 
      }
      return 0;
    });
  
    this.sortedResults = [...res];
  }
}
