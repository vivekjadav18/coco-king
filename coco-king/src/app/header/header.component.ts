import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('navbarCollapse') navbarCollapse: any;

  constructor() { }

  ngAfterViewInit(): void {
    // This ensures that the navbar collapse is accessible after the view is initialized
  }

  closeNav() {
    if (this.navbarCollapse) {
      this.navbarCollapse.nativeElement.classList.remove('show'); // Close the navbar by removing 'show' class
    }
  }
}
