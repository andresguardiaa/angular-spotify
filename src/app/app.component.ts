import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderuserComponent } from '@shared/components/headeruser/headeruser.component';
import { SidebarComponent } from '@shared/components/sidebar/sidebar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '';

}
