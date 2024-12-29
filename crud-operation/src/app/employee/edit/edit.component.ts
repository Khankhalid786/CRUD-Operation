import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {
    empId!:any;
    constructor(private route:ActivatedRoute, private empService:EmployeeService,private Route:Router) {
    
    }
   formdata : Employee = {
    eAge: 0,
    eName: '',
    eSalary: 0

   }

     ngOnInit() {
     this.route.paramMap.subscribe(params=>{
      this.empId = params.get('id');
      this.getEditData();

     });  

    }
    getEditData(){
     this.empService.edit(this.empId).subscribe((data)=>{
      this.formdata = data;
      console.log(this.formdata)
     });
    }  

    update(){
        this.empService.update(this.formdata).subscribe({
          next : (data)=> {
          this.Route.navigate(["home/employee"]);
          },
          error : (er) =>[
            console.log(er)
          ]
    
    
        })
    
    }
}



