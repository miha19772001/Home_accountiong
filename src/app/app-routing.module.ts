import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GeneralInformationComponent } from './components/general-information/general-information.component';

const routes: Routes = [
  //Link to the general-information page
  { path: 'general-info', component: GeneralInformationComponent },
  //Link to the general-information page
  { path: '**', redirectTo: '/general-info' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
