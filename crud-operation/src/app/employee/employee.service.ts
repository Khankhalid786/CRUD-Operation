import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
  
})
export class EmployeeService {
  getRecords() {
    throw new Error('Method not implemented.');
  }
  constructor(private httpClient: HttpClient) {}
  
  getAll(){
    return this.httpClient.get<Employee[]>('http://localhost:3000/Employees');
  }
  creat(data : Employee){
    console.log('post', data)
    return this.httpClient.post('http://localhost:3000/Employees',data);
  }
  edit(eId : number){
    return this.httpClient.get<Employee>(`http://localhost:3000/Employees/${eId}`);
  }
  update(data : Employee){
    return this.httpClient.put<Employee>(`http://localhost:3000/Employees/${data.id}`,data);
  }
  delete(id : number){
    return this.httpClient.delete<Employee>(`http://localhost:3000/Employees/${id}`);
  }
  
}

