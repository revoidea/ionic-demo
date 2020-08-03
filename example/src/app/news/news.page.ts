import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  public list:any[] = [];

  constructor() { }

  ngOnInit() {

    for (let index = 0; index < 11; index++) {
       this.list.push('第'+index+'条新闻信息。')
      
    }
  }

}
