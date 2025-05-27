import { Component } from '@angular/core';
import { SectiongenericComponent } from "../../shared/components/sectiongeneric/sectiongeneric.component";

@Component({
  selector: 'app-tracks',
  standalone: true,
  imports: [SectiongenericComponent],
  templateUrl: './tracks.component.html',
  styleUrl: './tracks.component.css'
})
export class TracksComponent {
  mockTrackList = [
    {
      name: 'HUMBLE',
      album: 'DAMN'
    },
    {
      name: 'c l o s e'
    },    
    {
      name: 'Money Trees'
    },
  ]

}
