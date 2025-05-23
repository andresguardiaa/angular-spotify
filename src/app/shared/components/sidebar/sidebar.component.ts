import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
//import { OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone:true, 
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  linksMenu: Array<any> = [
    {
      name: 'Home',
      icon: 'uil-estate'
    },
    {
      name: 'Search',
      icon: 'uil-estate'
    }
  ]

}
