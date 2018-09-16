import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';


@Component({
  selector: 'app-http-services',
  templateUrl: './http-services.component.html',
  styleUrls: ['./http-services.component.css']
})
export class HttpServicesComponent implements OnInit  {
  
  posts : any =[];
  constructor(private service : PostsService) { 
    
  }
  ngOnInit(){
    this.service.getAll().subscribe(response=>{
      this.posts = response.json();
      console.log(this.posts);
    },(error:Response)=>{
      
      alert('An unexpected error occured');
      console.log(error);
      
    });
  }
  createNew(nammm:HTMLInputElement){
    console.log(nammm.value);
    let postnew = {title:nammm.value};
    nammm.value="";
    this.service.create(postnew).subscribe(response=>{
        let id = response.json().id;
        postnew['id'] = id;
        this.posts.splice(0,0,postnew);
        
    },error=>{
      if (error.status===400)
      {}
      else{
      alert('An unexpected error occured');
      console.log(error);
      }
    });

  }
  updatePost(post){
    this.service.update(post)
    .subscribe(response=>{

      console.log(response);
    },error=>{
      alert('An unexpected error occured');
      console.log(error);
    });
    
    }
    deletePost(post){
      
     this.service.delete(post.id).subscribe(response=>{
        let index = this.posts.indexOf(post);
       this.posts.splice(index,1);
      },(error:Response)=>{ 
        if(error.status===404){
          alert('this post has already been deleted');
        }
        else{
        alert('An unexpected error occured');
        console.log(error);
        }
      });
  }


}
