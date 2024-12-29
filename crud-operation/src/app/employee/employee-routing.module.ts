import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'create', component: CreateComponent },
  { path: 'employee/home', component: HomeComponent },
  { path: 'employee/edit/:eId', component: EditComponent },
  { path: 'employee', redirectTo: 'employee/home', pathMatch: 'full' },
  { path: '', redirectTo: 'employee/home', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
