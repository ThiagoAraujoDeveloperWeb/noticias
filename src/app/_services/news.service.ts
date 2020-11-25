import { Injectable } from '@angular/core';
import { BaseService } from './common/base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class NewsService extends BaseService{

  constructor(public http: HttpClient) { super(http); }

  getNews() {
    return super.get('posts');
  }

  resgisterNews(news: any) {
    return super.post('posts', news);
  }
}
