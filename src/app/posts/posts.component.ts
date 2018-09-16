import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { PostsService } from '../services/posts.service';
import { AppError } from '../common/app-error';
import { BadInutError } from '../common/bad-input-error';
import { NotFoundError } from '../common/not-found-error';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

posts:any[];
  constructor(private service:PostsService) { }

  ngOnInit() {
    this.service.getAll()
    .subscribe(posts=> this.posts = posts);

    
  }
  insertPost(newpost:HTMLInputElement){
    let post = { 'title': newpost.value };
    this.posts.splice(0,0,post);
    this.service.create(post)
    .subscribe(newPost=>{
        post['id'] = newPost.id;
        
    },
    (error:AppError)=>{
      this.posts.splice(0,1);
      
      if (error instanceof BadInutError){
        alert('Bad request');
      }
      else{
    throw(error);
      }
    }
  
  );
  }
  deletePost(post){
    let index = this.posts.indexOf(post);
    this.posts.splice(index,1);
    this.service.delete(post.id)
    .subscribe(deletedPost=>{
     
    },
    (error:AppError)=>{
      this.posts.splice(index,0,post);
        if (error instanceof NotFoundError){
          alert('this post has already been deleted');
        }
        else{
          throw(error);
        }
    
    }
  );

  }
  updatePost(post){
    let updatedpost  = { 'title':'hello' };
    this.service.update(post)
    .subscribe(updatedPost=>{
      post['title']  ='hello';
        }
      
      );
  }


}
