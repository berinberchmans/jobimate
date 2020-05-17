import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { JobPageComponent } from './job-page/job-page.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: '',redirectTo : '/home', pathMatch:'full'},
  {path:'home', component: HomepageComponent},
  {path:'job/:id', component: JobPageComponent},
  {path:'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
