import { Component, OnInit } from '@angular/core';
import { DataFileService } from '../data-file.service';
import { Country } from '../Multi';

@Component({
  selector: 'app-random-two',
  templateUrl: './random-two.component.html',
  styleUrls: ['./random-two.component.css']
})
export class RandomTwoComponent implements OnInit {

  public countries: Country[] = [];

  constructor(private _countryService: DataFileService) { }

  ngOnInit(): void {
    this.countries = this._countryService.getCountryData();
  }

  addCountry(e: {name: string, id: string, city: string}) {
    let Id = parseInt(e.id);
    if(e.name === '' || e.city === '') {
      alert('Please do not submit blank details');
      return;
    } else {
    this.countries.push({name: e.name, id: Id, city: e.city});
    }
   }
 
   removeCountry(e: Country) {
     let idx: number = this.countries.indexOf(e);
     this.countries.splice(idx,1);
   }

}
