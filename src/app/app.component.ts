import { Component } from '@angular/core';
import { MyDataService } from './my-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private Service: MyDataService) {
       this.Service.getData();
     }
  test = 'Freinds app';
  posts = [
    { title: 'post 1', upvotes: 5 },
    { title: 'post 2', upvotes: 2 },
    { title: 'post 3', upvotes: 15 },
    { title: 'post 4', upvotes: 9 },
    { title: 'post 5', upvotes: 4 }
  ];

  // addPost=function(){
  //   this.posts.push({title:'A new post!', upvotes:0});
  // };

  addPost = function () {
    if (this.posts.title === '') {
      return;
    }
    this.posts.push({
      title: this.title,
      link: this.link,
      upvotes: 0,
      comments: [
        { author: 'Joe', body: 'Cool post!', upvotes: 0 },
        { author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0 }
      ]
    });
    this.title = '';
    this.link = '';
  };

  incrementUpvotes = function (post) {
    post.upvotes += 1;
  };

  //  addPost = function () {
  //   if(this.posts.title==='')
  //   {
  //     return;
  //   }
  //   this.posts.push({title:this.title, link:this.link, upvotes:0});
  //   this.title='';
  //   this.link='';  
  // };
  //  incrementUpvotes = function(post) {
  //   post.upvotes += 1;
  // };
  // 
}
