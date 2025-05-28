import { Component } from '@angular/core';
import { PlaylistBodyComponent } from '@shared/components/playlist-body/playlist-body.component';
import { PlaylistHeaderComponent } from '@shared/components/playlist-header/playlist-header.component';

@Component({
  selector: 'app-favourites',
  standalone: true,
  imports: [PlaylistBodyComponent, PlaylistHeaderComponent],
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.css'
})
export class FavouritesComponent {

}
