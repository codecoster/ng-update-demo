import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

@Injectable()
export class MyTitleStrategyService extends TitleStrategy {
  constructor(private title: Title) {
    super();
  }

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const oldTitle = this.buildTitle(snapshot);
    if(oldTitle) {
      this.title.setTitle(`My Ng 14 Demo App <-> ${oldTitle}`)
    }
  }
}
