import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategorypageComponent } from './categorypage/categorypage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductpageComponent } from './productpage/productpage.component';

const routes: Routes = [
  {
    path: "",
    component: HomepageComponent
  },
  {
    path: "parliamo",
    component: ContactpageComponent
  },
  {
    path: ":categoria",
    component: CategorypageComponent
  },
  {
    path: ":categoria/:prodotto",
    component: ProductpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
