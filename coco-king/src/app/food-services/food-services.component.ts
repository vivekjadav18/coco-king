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
      location: 'Mota Varachha (Surat)',
      address: 'G 4/5 vishambhar arcade mota varachha',
      owner: 'Parth Itlaiya',
      contact: '+918000428689',
      mapLink: 'https://maps.app.goo.gl/nTd63Lkg2U3qWo5K6',
      instagram: 'https://www.instagram.com/shakti_cocoking_?igsh=dXd1dHp1OXQxdnhs', 
      whatsapp: 'https://wa.me/+918000428689',  
      isMainBranch: true
    },
    { 
      name: 'Franchise 1',
      location: 'Yogi Chock (Surat)',
      address: 'G-5 savan plaza savalia circle yogi chock',
      owner: 'Ghanshayabhai Ghori',
      contact: '+919979621854',
      mapLink: 'https://maps.app.goo.gl/iC6hSe5HysKTCqFs8',
      instagram: 'https://www.instagram.com/shakti_cocoking_?igsh=dXd1dHp1OXQxdnhs', 
      whatsapp: 'https://wa.me/+919979621854',  
      isMainBranch: false
    },
    { 
      name: 'Franchise 2',
      location: 'Kamrej (Surat)',
      address: 'G-1 shiv sagar food cort near signate mall kamrej',
      owner: 'Sagar Sheladiya',
      contact: '+918732928586',
      mapLink: 'https://maps.app.goo.gl/LByYCVKLvKJYmLJCA',
      instagram: 'https://www.instagram.com/shakti_cocoking_?igsh=dXd1dHp1OXQxdnhs', 
      whatsapp: 'https://wa.me/+918732928586',  // WhatsApp link
      isMainBranch: false
    },
    { 
      name: 'Franchise 3',
      location: 'Katargam (Surat)',
      address: 'G-3 sangam heights dabholi bridge near brts stop katargam',
      owner: 'Jemish Ghelani',
      contact: '+917874561420',
      mapLink: 'https://maps.app.goo.gl/dpUgTFNT7AN8L9Wc9',
      instagram: 'https://www.instagram.com/yourfranchise3',  // Add Instagram link
      whatsapp: 'https://wa.me/+917874561420',  // WhatsApp link
      isMainBranch: false
    },
    { 
      name: 'Franchise 4',
      location: 'Jakatnaka (Surat)',
      address: 'G-70 royal arcade opp sarthana naturepark jakatnaka',
      owner: 'Sagar Sheladiya',
      contact: '+918732928586',
      mapLink: 'https://www.google.com/maps?q=202+Central+Ave,+Phoenix,+AZ+85001',
      instagram: 'https://www.instagram.com/shakti_cocoking_?igsh=dXd1dHp1OXQxdnhs', 
      whatsapp: 'https://wa.me/+918732928586',  // WhatsApp link
      isMainBranch: false
    },
    { 
      name: 'Franchise 5',
      location: 'Adajan (Surat)',
      address: 'Marvela bussiness hub, near pal RTO adajan',
      owner: 'Parth Itlaiya',
      contact: '+918000428689',
      mapLink: 'https://maps.app.goo.gl/zdun7PstqwHyGYcK6',
      instagram: 'https://www.instagram.com/shakti_cocoking_?igsh=dXd1dHp1OXQxdnhs', 
      whatsapp: 'https://wa.me/+918000428689',  // WhatsApp link
      isMainBranch: false
    }
  ];
  
  

}
