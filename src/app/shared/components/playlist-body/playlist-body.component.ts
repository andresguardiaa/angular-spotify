import { Component, OnInit } from '@angular/core';
import * as dataRaw from '../../../data/tracks.json'
import { TrackModel } from '@core/tracks.model';
import { CommonModule } from '@angular/common';
import { OrderlistPipe } from "../../pipe/orderlist.pipe";

@Component({
  selector: 'app-playlist-body',
  imports: [CommonModule, OrderlistPipe],
  templateUrl: './playlist-body.component.html',
  styleUrl: './playlist-body.component.css'
})
export class PlaylistBodyComponent implements OnInit {
  tracks: Array<TrackModel> = [
  ]
  optionSort:{property:string | null, order:string} = {property:null, order: 'asc'}
  ngOnInit(): void {
    const {data} : any = (dataRaw as any).default
    this.tracks = data;
  }

  changeSort(property: string): void {
    const {order} = this.optionSort
    this.optionSort = {
      property,
      order: order === 'asc' ? 'desc' : 'asc'

    }
    console.log(this.optionSort);
  }

}
