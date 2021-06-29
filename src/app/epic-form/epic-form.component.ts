import { Component, OnInit } from '@angular/core';
import { DataFileService } from '../data-file.service';
import { Address } from '../Multi';

@Component({
  selector: 'app-epic-form',
  templateUrl: './epic-form.component.html',
  styleUrls: ['./epic-form.component.css']
})
export class EpicFormComponent implements OnInit {

  public newAddress: Address[] = [];
  public address: Address= {
    name: "",
     phone: 0,
      email: "",
       defAdd: "",
        currAdd: ""
  }

  constructor(private _dataService: DataFileService) { }

  ngOnInit(): void {

    this.newAddress = this._dataService.getAddressData();
  }

/*   searchData(e: string) {
    for(var i in this.emp) {
      if(this.emp[i].name == e) {
        this.employee = this.emp[i];
      }
    }

    for(var i in this.con) {
      if(this.con[i].name == e) {
        this.country = this.con[i];
      }
    }

    for (var i in this.comp) {
      if(this.comp[i].name == e) {
        this.company = this.comp[i];
      }
    }
  }

  clearData() {
    delete this.employee;
    delete this.country;
    delete this.company;
  } */

 

}
