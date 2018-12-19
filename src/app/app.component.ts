import { Component, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .list-detail {margin: 10px auto}
    li {outline: none;}
    .text-center {text-align: center}
  `]
})
export class AppComponent implements AfterViewInit {
  // public needHide = false;
  public ngAfterViewInit() {
    // this.needHide = true;
  }
}
