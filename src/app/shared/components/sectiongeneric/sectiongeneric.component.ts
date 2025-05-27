import { CommonModule, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TrackModel } from '@core/tracks.model';
import { CardplayerComponent } from "../cardplayer/cardplayer.component";

@Component({
  selector: 'app-sectiongeneric',
  imports: [CommonModule, CardplayerComponent],
  templateUrl: './sectiongeneric.component.html',
  styleUrl: './sectiongeneric.component.css'
})
export class SectiongenericComponent {
  @Input() title: string = ''
  @Input() mode: 'small' | 'big' = 'big'
  @Input() dataTracks: Array<TrackModel> = []

}
