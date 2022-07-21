import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-videos',
  standalone: true,
  templateUrl: './videos.component.html',
  imports: [
    MatTabsModule
  ],
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
