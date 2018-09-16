import { Component } from '@angular/core';
import { FavouriteInterface } from './favourite/favourite.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app'
  post= {
    isFavorite : true
  }
  somethinfIsChanged(newArg:FavouriteInterface){
    console.log('Favourite is changed',newArg);
  }
  log(x){
    console.log(x);
  }
}
