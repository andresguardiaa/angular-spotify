import { Component, OnInit } from '@angular/core';
import { SectiongenericComponent } from "../../shared/components/sectiongeneric/sectiongeneric.component";
import * as dataRaw from '../../data/tracks.json'
import { TrackModel } from '@core/tracks.model';

@Component({
  selector: 'app-tracks',
  standalone: true,
  imports: [SectiongenericComponent],
  templateUrl: './tracks.component.html',
  styleUrl: './tracks.component.css'
})
export class TracksComponent implements OnInit {
  mockTrackList: Array<TrackModel> = [

  ]

  ngOnInit(): void {
    const {data} :any = (dataRaw as any).default
    this.mockTrackList = data;
  }

}
