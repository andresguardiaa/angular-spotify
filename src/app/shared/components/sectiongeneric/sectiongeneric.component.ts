import { CommonModule, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sectiongeneric',
  imports: [CommonModule],
  templateUrl: './sectiongeneric.component.html',
  styleUrl: './sectiongeneric.component.css'
})
export class SectiongenericComponent {
  @Input() title: string = ''
  @Input() mode: 'small' | 'big' = 'big'
  @Input() dataTracks: Array<any> = [

  ]

}
