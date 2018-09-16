import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../services/myservice.service';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})
export class MycomponentComponent implements OnInit {
  
  posts:any = [];
  constructor( private servv:MyserviceService ) { 
   
  }
  newPost(posta:HTMLInputElement){
    let poss = {title:posta.value};

    this.servv.createPost(poss)
    .subscribe(response=>{
      let id= response.json().id;
      poss['id']=id;
      this.posts.splice(0,0,poss);
    });
  }
  deletPost(post){
    let id = post.id;
    let index = this.posts.indexOf(post);
    this.servv.deletePost(id)
    .subscribe(response=>{
      this.posts.splice(index,1);
      
    });
    
  }
  updatePost(post){
    let id = post.id;
    let title1="new title";
    let postupdate={title:"new title",id:id,body:"hsdfkjsavkjj",userId:1}
    let index = this.posts.indexOf(post);
    this.servv.updatePost(postupdate)
    .subscribe(response=>{
      this.posts[index].title=postupdate.title;
      
    });
    
  }
  ngOnInit() {
    this.servv.getPost()
    .subscribe(response=>{
      console.log(response.json());
      this.posts = response.json();
    });
  }

}
