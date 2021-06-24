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

  addCompany(e: {id: string, name: string, origin: string, product: string, revenue: string, people: string, ceo: string, established: string}) {
    let Id = parseInt(e.id);
    let rev = parseInt(e.revenue);
    let peo = parseInt(e.people)
    let est = parseInt(e.established)
    if(e.name === '') {
      alert('Please do not submit blank details');
      return;
    } else {
    this.companies.push({id: Id, name: e.name, origin: e.origin, product: e.product, revenue: rev, people: peo, ceo: e.ceo, established: est});
    }
   }
 
   removeCompany(e: Company) {
     let idx: number = this.companies.indexOf(e);
     this.companies.splice(idx,1);
   }

}
