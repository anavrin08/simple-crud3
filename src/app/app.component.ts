import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Simple Crud 3';
  currentRoute: String | undefined;

  constructor(private router: Router) {
    
  }

  hasRoute(route: string){
    return this.router.url.includes(route)
  }

  getRoute(){
    return this.router.url
  }
} 
