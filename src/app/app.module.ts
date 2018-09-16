import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseService } from './courses/course.service';
import { EmailService } from './email.service';
import { SummaryPipe } from './summary.pipe';
import { FavouriteComponent } from './favourite/favourite.component';
import { InputformatDirective } from './inputformat.directive';
import { HttpServicesComponent } from './http-services/http-services.component';
import { HttpModule, BaseRequestOptions } from '@angular/http';
import { RouterModule } from '@angular/router';
import { PostsService } from './services/posts.service';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { MyserviceService } from './services/myservice.service';
import { NotfoudComponent } from './notfoud/notfoud.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FollowersComponent } from './followers/followers.component';
import { PostsComponent } from './posts/posts.component';
import { MyErrorHandler } from './common/myerror-handler';
import { ProfileComponent } from './profile/profile.component';
import { SampleComponent } from './sample/sample.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { NoaccessComponent } from './noaccess/noaccess.component';
import { Authguard } from './services/authguard.service';
import { AdminAuthGuard } from './services/admin-auth-guard.service';
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SummaryPipe,
    FavouriteComponent,
    InputformatDirective,
    HttpServicesComponent,
    MycomponentComponent,
    NavbarComponent,
    NotfoudComponent,
    FollowersComponent,
    PostsComponent,
    ProfileComponent,
    SampleComponent,
    LoginComponent,
    NoaccessComponent,
    HomeComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path:'posts/:id',component:SampleComponent},
      {path:'posts',component:PostsComponent},
      {path:'profile',component:ProfileComponent},
      {path:'followers',component:FollowersComponent},
      {path:'admin',component:AdminComponent,canActivate:[Authguard,AdminAuthGuard]},
      {path:'login',component:LoginComponent},
      {path:'no-access',component:NoaccessComponent}
    ])
  ],
  providers: [
    CourseService,
    EmailService,
    PostsService,
    MyserviceService,
    {provide:ErrorHandler,useClass:MyErrorHandler}
// Only for fake backend
    

  ],
  bootstrap: [AppComponent]
})
export class AppModule { } 
