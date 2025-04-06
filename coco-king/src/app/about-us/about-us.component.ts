import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  teamMembers = [
    {
      name: 'Parth Italiya',
      role: 'Owner of shakti foods',
      image: '../../assets/image/parth-italiya.jpeg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  // Form submission handler
  onSubmit(): void {
    alert('Form submitted successfully!');
  }
}
