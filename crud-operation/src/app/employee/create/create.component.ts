import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { create } from 'domain';
import { error } from 'console';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  constructor(private employeeservice : EmployeeService, private router : Router){}
  formdata : Employee = {
    // id: 0,
    eAge: 0,
    eName: '',
    eSalary: 0
  }

  create(){
    // this.formdata.id = this.formdata.id + 1

    // this.formdata.id = id
    this.employeeservice.creat(this.formdata)
   
    .subscribe({
      next : (data)=> {
      this.router.navigateByUrl("home/employee");
      },
      error : (er) =>[
        console.log(er)
      ]
    })
  }
}

  