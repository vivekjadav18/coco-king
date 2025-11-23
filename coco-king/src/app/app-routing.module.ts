import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './home/homepage/homepage.component';
import { ProductsComponent } from './products/products.component';
import { FoodServicesComponent } from './food-services/food-services.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'products', component: ProductsComponent },
  // { path: 'our-franchise', component: FoodServicesComponent },
  {path : 'our-franchise', component: FoodServicesComponent ,
    children: [
      { path: 'products', component: ProductsComponent }
    ]
  },
  { path: 'about-us', component: AboutUsComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
