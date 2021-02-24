import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoilerplateAddressFormComponent } from './boilerplate-address-form/boilerplate-address-form.component';
import { BoilerplateDashboardComponent } from './boilerplate-dashboard/boilerplate-dashboard.component';
import { BoilerplateTableComponent } from './boilerplate-table/boilerplate-table.component';

const routes: Routes = [
  {
      path: '', component: BoilerplateDashboardComponent
  },
  {
      path: 'address', component: BoilerplateAddressFormComponent
  },
  {
      path: 'table', component: BoilerplateTableComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
