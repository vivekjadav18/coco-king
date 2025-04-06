import { Component } from '@angular/core';

@Component({
  selector: 'app-food-services',
  templateUrl: './food-services.component.html',
  styleUrls: ['./food-services.component.scss']
})
export class FoodServicesComponent {
  franchises = [
    {
      location: 'Mota Varachha',
      address: '123 Rue de Paris, Paris, France',
      owner: 'John Doe',
      mobile: '+33 1 23 45 67 89'
    },
    {
      location: 'London',
      address: '456 Oxford Street, London, UK',
      owner: 'Jane Smith',
      mobile: '+44 20 7946 0958'
    },
    {
      location: 'New York',
      address: '789 Broadway, New York, USA',
      owner: 'Michael Johnson',
      mobile: '+1 212-555-0123'
    },
    {
      location: 'Tokyo',
      address: '101 Shibuya, Tokyo, Japan',
      owner: 'Taro Yamada',
      mobile: '+81 3-1234-5678'
    },
    {
      location: 'Sydney',
      address: '202 George Street, Sydney, Australia',
      owner: 'Olivia Lee',
      mobile: '+61 2 9876 5432'
    },
    {
      location: 'Dubai',
      address: '303 Sheikh Zayed Road, Dubai, UAE',
      owner: 'Ahmed Al-Farsi',
      mobile: '+971 4 123 4567'
    },
    {
      location: 'Berlin',
      address: '404 Alexanderplatz, Berlin, Germany',
      owner: 'Lena Müller',
      mobile: '+49 30 123456789'
    }
  ];
}
