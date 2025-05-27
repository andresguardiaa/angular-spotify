import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TrackModel } from '@core/tracks.model';

@Component({
  selector: 'app-cardplayer',
  imports: [CommonModule],
  templateUrl: './cardplayer.component.html',
  styleUrl: './cardplayer.component.css'
})
export class CardplayerComponent {
  @Input() mode: 'small' | 'big' ='small'
  @Input() track: TrackModel = {
    name: '',
    cover: '',
    album: '',
    url: '',
    _id: 1
  };

}
