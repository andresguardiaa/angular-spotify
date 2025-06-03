import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TrackModel } from '@core/tracks.model';
import { ImgBrokenDirective } from '@shared/directives/img-broken.directive';

@Component({
  selector: 'app-cardplayer',
  standalone:true,
  imports: [CommonModule, ImgBrokenDirective],
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
