import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  private url = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http :Http) { }
  getPost(){
   return this.http.get(this.url)
  }
  updatePost(postupdate){
    return this.http.put(this.url+ "/" +postupdate.id,JSON.stringify(postupdate))
  }
  deletePost(id){
    return this.http.delete(this.url+ "/" +id);
  }
  createPost(poss){
    return this.http.post(this.url,JSON.stringify(poss))
  }
}
