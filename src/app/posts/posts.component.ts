import { Component, OnInit } from '@angular/core';
import { MyDataService } from './../my-data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  post='';
  posts='';
  id='';

  constructor() {
    this.post = this.posts[this.id]
   }

  

  ngOnInit() {
  }
addComment = function(){
  if(this.body === '') { return; }
  this.post.comments.push({
    body: this.body,
    author: 'user',
    upvotes: 0
  });
  this.body = '';
};

}
