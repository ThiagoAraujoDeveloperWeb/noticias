import { Component, OnInit } from '@angular/core';
import { NewsService } from '../_services/news.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register-news',
  templateUrl: './register-news.component.html',
  styleUrls: ['./register-news.component.css'],
  providers: [MessageService]
})
export class RegisterNewsComponent implements OnInit {
  text: string;
  notice = {
    title: '',
    body: ''
  }

  constructor(
    public newsSrv: NewsService,
    private messageService: MessageService,
    public activatedRoute: ActivatedRoute,
    public router: Router

  ) { }

  ngOnInit() {
  }

  cancel() {
    this.router.navigate(['']);
  }

  create() {
    this.newsSrv.resgisterNews(this.notice).then((response: any) => {
      console.log('Criado', response);
      this.messageService.add(
        {
          severity:'success',
          summary: 'Sucesso',
          detail: 'Sua noticia foi criada.'
        }
      );

      this.notice.title = '';
      this.notice.body = '';

    }).catch(error => {
      console.log('Error:', error);
    });
  }

}
