import { Component } from '@angular/core';

@Component({
  selector: 'app-food-services',
  templateUrl: './food-services.component.html',
  styleUrls: ['./food-services.component.scss']
})
export class FoodServicesComponent  {

  franchises = [
    { 
      name: 'Main Branch',
      location: 'Mota Varachha',
      address: 'G 4/5 vishambhar arcade mota varachha',
      owner: 'Parth Itlaiya',
      contact : '+918000428689',
      mapLink: 'https://maps.app.goo.gl/nTd63Lkg2U3qWo5K6',
      isMainBranch: true // Mark this as the main branch
    },
    { 
      name: 'Franchise 2',
      location: 'Los Angeles',
      address: '456 Sunset Blvd, Los Angeles, CA 90001',
      owner: 'Jane Smith',
      mapLink: 'https://www.google.com/maps?q=456+Sunset+Blvd,+Los+Angeles,+CA+90001',
      isMainBranch: false
    },
    { 
      name: 'Franchise 3',
      location: 'Chicago',
      address: '789 Lake Shore Dr, Chicago, IL 60611',
      owner: 'Robert Brown',
      mapLink: 'https://www.google.com/maps?q=789+Lake+Shore+Dr,+Chicago,+IL+60611',
      isMainBranch: false
    },
    { 
      name: 'Franchise 4',
      location: 'Houston',
      address: '101 Main St, Houston, TX 77002',
      owner: 'Emily Clark',
      mapLink: 'https://www.google.com/maps?q=101+Main+St,+Houston,+TX+77002',
      isMainBranch: false
    },
    { 
      name: 'Franchise 5',
      location: 'Phoenix',
      address: '202 Central Ave, Phoenix, AZ 85001',
      owner: 'Michael Davis',
      mapLink: 'https://www.google.com/maps?q=202+Central+Ave,+Phoenix,+AZ+85001',
      isMainBranch: false
    }
  ];
  

}
