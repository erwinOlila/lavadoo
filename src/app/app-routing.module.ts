import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { AboutComponent } from './about/about.component';
import { PricingComponent } from './pricing/pricing.component';
import { WorksComponent } from './works/works.component';
import { SigninComponent } from './signin/signin.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent
  },
  {
    path: 'pricing',
    component: PricingComponent
  },
  {
    path: 'how-it-works',
    component: WorksComponent
  },
  {
    path: 'enter',
    component: SigninComponent
  },
  {
    path: 'faqs',
    component: FaqComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
