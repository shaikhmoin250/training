import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MyDataService {
 constructor(private http: Http) { }
  getData() {
    this.http.get('http://localhost:3000/posts').subscribe(
      (data) => console.log(data)
    )
  }
   sucess() {
    return "successful";
  }
  posts=[]

}
