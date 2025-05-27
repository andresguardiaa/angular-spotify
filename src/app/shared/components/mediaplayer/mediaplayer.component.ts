import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TrackModel } from '@core/tracks.model';

@Component({
  selector: 'app-mediaplayer',
  imports: [CommonModule],
  templateUrl: './mediaplayer.component.html',
  styleUrl: './mediaplayer.component.css'
})
export class MediaplayerComponent {
  mockCover: TrackModel = {
    cover: 'https://upload.wikimedia.org/wikipedia/en/5/51/Kendrick_Lamar_-_Damn.png',
    album: 'DAMN',
    name: 'LUST.',
    url: '',
    _id: 1
  }

}
