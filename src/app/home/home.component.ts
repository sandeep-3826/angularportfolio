import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http : HttpClient) { }
mynews;
latestNews;
  ngOnInit() {
    const url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ece95912ea3746e68826c8eb30e2eb66";
    this.http.get(url)
    .subscribe(res=>{
      this.mynews = res;
      this.latestNews = this.mynews.articles;
      console.log(this.latestNews);
    },err=>{
      console.log(err);
    })
  }

}
