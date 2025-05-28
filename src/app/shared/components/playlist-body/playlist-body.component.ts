import { Component, OnInit } from '@angular/core';
import * as dataRaw from '../../../data/tracks.json'
import { TrackModel } from '@core/tracks.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-playlist-body',
  imports: [CommonModule],
  templateUrl: './playlist-body.component.html',
  styleUrl: './playlist-body.component.css'
})
export class PlaylistBodyComponent implements OnInit {
  tracks: Array<TrackModel> = [

  ]

  ngOnInit(): void {
    const {data} : any = (dataRaw as any).default
    this.tracks = data;
  }

}
