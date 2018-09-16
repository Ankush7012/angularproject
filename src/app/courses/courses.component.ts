import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  title= "Courses";
  coursList;
  coursescount;
  email; 
  text="Lorem Ipsum sdf sdf sdf sd fsd f ds f sdf sd f ds fds f sd f sd f sd f dsf  sdf s df ";
  constructor(service: CourseService) {
    this.coursList = service.getCourse();
    this.coursescount=this.coursList.length;
  }
  buttonClick($event){
    $event.stopPropagation();
    console.log("dfggchghgv", $event);
  }
   
  divClick(){
    console.log("ghjghj");
  }
  ghg(){
   console.log(this.email);
  }
  ngOnInit() {
  }

}
