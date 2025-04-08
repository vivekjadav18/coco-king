import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'coco-king';
  @ViewChild('dataContainer', { static: false }) dataContainer!: ElementRef;

  onScroll(e: any, scroll: any) {
    this.dataContainer.nativeElement.scrollTop = 0;
  }
}
