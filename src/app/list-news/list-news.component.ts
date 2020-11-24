import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { NewsService } from '../_services/news.service';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.css']
})
export class ListNewsComponent implements OnInit {
  @ViewChild('mySidebar') mySidebar: ElementRef;
  @ViewChild('openSidBar') openSidBar: ElementRef;
  list = [];
  constructor(
    public newsSrv: NewsService
  ) { }

  ngOnInit() {
    this.listNews();
  }

  listNews() {
    this.newsSrv.getNews().then((response: any) => {

      for (const notice of response) {
        this.list.push(notice);
      }

    }).catch(error => {
      console.log('Error:', error)
    });
  }

  open() {
    this.mySidebar.nativeElement.style.width = "250px";
  }

  close() {
    this.mySidebar.nativeElement.style.width = "0";
  }

}
