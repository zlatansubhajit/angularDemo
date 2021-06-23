import { Component, OnInit } from '@angular/core';
import { DataFileService } from '../data-file.service';
import { Company } from '../Multi';

@Component({
  selector: 'app-random-three',
  templateUrl: './random-three.component.html',
  styleUrls: ['./random-three.component.css']
})
export class RandomThreeComponent implements OnInit {

  public companies: Company[] = [];

  constructor(private _companyService: DataFileService) { }

  ngOnInit(): void {
    this.companies = this._companyService.getCompanyData();
  }

  addCompany(e: {name: string, id: string}) {
    let Id = parseInt(e.id);
    if(e.name === '') {
      alert('Please do not enter blank name');
      return;
    } else {
    this.companies.push({name: e.name, id: Id});
    }
   }
 
   removeCompany(e: Company) {
     let idx: number = this.companies.indexOf(e);
     this.companies.splice(idx,1);
   }

}
