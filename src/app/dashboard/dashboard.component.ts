import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../Employee';
import { DataFileService } from '../data-file.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public emp: Employee[] = [];
  public detail: Employee = {
    name: "",
    id: 0,
    age: 0,
    geography: "",
    location: "",
    branch: "",
    project: "",
    department: "",
    grade: ""
  }
  name: any;

  

  constructor(private _dashboardService: DataFileService) { }

  ngOnInit(): void {
    this.emp = this._dashboardService.getEmployeeData();
  }

  search() {
    if(this.name == '') {
      this.ngOnInit();
    } else {
      this.emp = this.emp.filter(res => {
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      });
    }
  }

  showEmployee(e: Employee) {
    this.detail = e;
  }

  updateEmp(e: { id: string, age: string, geography: string, location: string, branch: string, project: string, department: string, grade: string}) {
    let Id = parseInt(e.id);
    let Age= parseInt(e.age);
    for( var i in this.emp) {
      if(this.emp[i].id == Id) {
        this.emp[i].age = Age;
        this.emp[i].geography = e.geography;
        this.emp[i].location = e.location;
        this.emp[i].branch = e.branch;
        this.emp[i].project = e.project;
        this.emp[i].department = e.department;
        this.emp[i].grade = e.grade;
        break;
      }
    }
  }

  updateEmpById(e: {id: string, name: string, age: string, geography: string, location: string, branch: string, project: string, department: string, grade: string}) {
    let Id = parseInt(e.id);
    let Age= parseInt(e.age);
    for( var i in this.emp) {
      if(this.emp[i].id == Id) {
        this.emp[i].name = e.name;
        this.emp[i].age = Age;
        this.emp[i].geography = e.geography;
        this.emp[i].location = e.location;
        this.emp[i].branch = e.branch;
        this.emp[i].project = e.project;
        this.emp[i].department = e.department;
        this.emp[i].grade = e.grade;
        break;
      }
    }
  }

  
    
  
  

}
