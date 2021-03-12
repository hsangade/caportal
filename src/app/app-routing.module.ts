import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ContactusComponent } from './contactus/contactus.component'
import { PricingComponent } from './pricing/pricing.component'
import { AboutusComponent} from './aboutus/aboutus.component'
const routes: Routes = [
  {path : 'header' , component: HeaderComponent},
  {path : 'contactus' , component: ContactusComponent},
  {path : 'pricing' , component: PricingComponent},
  {path : 'aboutus' , component: AboutusComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
