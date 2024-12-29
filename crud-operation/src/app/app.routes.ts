import { Routes } from '@angular/router';
import { EmployeeModule } from './employee/employee.module';
import { Component } from '@angular/core';
import { HomeComponent } from './employee/home/home.component';
import { CreateComponent } from './employee/create/create.component';
import { EditComponent } from './employee/edit/edit.component';
import { ActivatedRoute } from '@angular/router';


export const routes: Routes =[ 
    {path:'create', component: CreateComponent},
  {path:'home/employee',component:HomeComponent},
  { path: 'employee/edit/:id', component: EditComponent }   
];