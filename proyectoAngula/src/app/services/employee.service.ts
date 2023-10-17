import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  //servicio para obtener todos los empleados
  getAllEmployee(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/employees');
  }

  //servicio para registrar usuarios
  registerEmployee(Datos: any): Observable<any>{
    return this.http.post('http://127.0.0.1:8000/api/save',Datos);
  }

  updateEmployee(id: any, data: any): Observable<any> {
    return this.http.put(`http://127.0.0.1:8000/api/update/${id}`, data);
  }

  deleteEmployee(id: any): Observable<any> {
    return this.http.delete(`http://127.0.0.1:8000/api/delete/${id}`);
  }

}
