import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    
    
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    CreateComponent,
    EditComponent,
    RouterModule
    
  ]
})
export class EmployeeModule { }
