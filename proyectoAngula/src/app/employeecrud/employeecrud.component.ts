import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employeecrud',
  templateUrl: './employeecrud.component.html',
  styleUrls: ['./employeecrud.component.scss']
})
export class EmployeecrudComponent implements OnInit{

  EmployeeArray : any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;


  name: string ="";
  address: string ="";
  mobile: Number =0;
  currentEmployeeID = "";


  constructor(
    private _empService: EmployeeService,
  ){}

  ngOnInit(): void {
    this.getAllEmployee();
  }


  //se usa el servicio para obtener todos los datos de los usuarios
  getAllEmployee() {
    this._empService.getAllEmployee().subscribe({
      next: (resultData) => {
        this.isResultLoaded = true;
        console.log(resultData);
        this.EmployeeArray = resultData;
      },
      error: console.log,
    });
  }

  //se usa el servicio para registrar nuevos usuarios
  registerEmployee()
  {
    let bodyData = {
      "name" : this.name,
      "address" : this.address,
      "mobile" : this.mobile
    };
    this._empService.registerEmployee(bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Employee Registered Successfully")
        this.getAllEmployee();
        this.name = '';
        this.address = '';
        this.mobile  = 0;
    });
  }


  setUpdate(data: any)
  {
   this.name = data.name;
   this.address = data.address;
   this.mobile = data.mobile;
   this.currentEmployeeID = data.id;
  }

  UpdateRecords()
  {
    let bodyData = {
      "name" : this.name,
      "address" : this.address,
      "mobile" : this.mobile,
    };

    this._empService.updateEmployee(this.currentEmployeeID,bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Employee Registered Updateddd")
        this.getAllEmployee();
        this.name = '';
        this.address = '';
        this.mobile  = 0;
    });
  }



  save()
  {
    if(this.currentEmployeeID == "")
    {
        this.registerEmployee();
    }
      else
      {
       this.UpdateRecords();
      }

  }


  setDelete(data:any)
  {
    this._empService.deleteEmployee(data.id).subscribe({
      next: (resultData: any) => {
      console.log(resultData);
      alert("Empleado eliminado")
      this.getAllEmployee();
    },
    error: console.log,
  });
  }




}
