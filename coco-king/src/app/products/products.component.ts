import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{

  @ViewChild('aboutContent') aboutContent: ElementRef | any;

  ngOnInit(): void {
    // Scroll to aboutContent position when the component is loaded
    setTimeout(() => {
      window.scrollTo(0, this.aboutContent.nativeElement.offsetTop / 2);
    }, 0); // Delay to ensure the component is fully loaded
  }

}
