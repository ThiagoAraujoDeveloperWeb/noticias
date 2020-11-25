import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { NewsService } from '../_services/news.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.css']
})
export class ListNewsComponent implements OnInit {
  @ViewChild('mySidebar', {static: true}) mySidebar: ElementRef;
  @ViewChild('openSidBar', {static: true}) openSidBar: ElementRef;
  list = [];
  constructor(
    public newsSrv: NewsService,
    public activatedRoute: ActivatedRoute,
    public router: Router

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

  seeMore(notice) {
    this.router.navigate(['/show-news'],
      { queryParams: notice }
    );
  }

  open() {
    this.mySidebar.nativeElement.style.width = "250px";
  }

  close() {
    this.mySidebar.nativeElement.style.width = "0";
  }

}
