import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

import { VideosRoutingModule } from './videos-routing.module';
import { VideosComponent } from './videos.component';


@NgModule({
  declarations: [
    VideosComponent
  ],
  imports: [
    CommonModule,
    VideosRoutingModule,
    MatTabsModule
  ]
})
export class VideosModule { }
