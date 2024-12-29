import { Component,OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, RouterLink,NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {

 allemployees : Employee[] = [];
  constructor(private EmployeeService : EmployeeService){}

  ngOnInit(): void {
    this.EmployeeService.getAll().subscribe((data)=>{
      this.allemployees = data;
        });
  }

  deleteItem(id : any){
    this.EmployeeService.delete(id).subscribe({
        next :(data)=>{
          console.log(data);
          this.allemployees =this.allemployees.filter(_ => _.id !=id)
        }
    })
    
  }
  // clearAll(){
  // this.EmployeeService.clearAll(){

  // }
  // }

}
