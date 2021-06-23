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

}
