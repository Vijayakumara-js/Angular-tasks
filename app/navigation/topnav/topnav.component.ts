import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  isCollapsed = false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
      localStorage.removeItem('currentUser');
    this.router.navigate(['/login'])
    
  }

}
