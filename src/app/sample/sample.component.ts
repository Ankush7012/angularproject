import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { map,switchMap } from 'rxjs/operators';
import  {combineLatest } from 'rxjs';
import { Http } from '@angular/http';
import { DataService } from '../services/data.service';
import { PostsService } from '../services/posts.service';
@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent  implements OnInit {

  constructor(http:Http,private route:ActivatedRoute,private service:PostsService ) {
    //super("https://jsonplaceholder.typicode.com/posts",http);
   }

  ngOnInit() {
    
    /* this.route.paramMap.subscribe(params=>{
console.log(params.get('id'));
    }); */
    combineLatest(
      this.route.paramMap,
      this.route.queryParamMap
    ).pipe(
          switchMap(o=>{
        console.log(o[0]);
         return this.service.getAll()
         
          }   
    )
  ).subscribe(response=>{ 
    console.log(response);
  }); 
    


/* 
    this.route.paramMap
    .subscribe(params=>{
        let id = +params.get('id');
        console.log(id);
    });
    this.route.queryParamMap
    .subscribe(params=>{
        let ist = params.get('name');
        let email = params.get('email');
        console.log(ist);
        console.log(email);
    }); */

  }

}
