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

  addCountry(e: {id: string, name: string, capital: string, continent: string, government: string, population: string, currency: string, terrain: string}) {
    let Id = parseInt(e.id);
    let pop = parseInt(e.population);
    if(e.name === '' || e.capital === '') {
      alert('Please do not submit blank details');
      return;
    } else {
    this.countries.push({id: Id, name: e.name, capital: e.capital, continent: e.continent, government: e.government, population: pop, currency: e.currency, terrain: e.terrain});
    }
   }
 
   removeCountry(e: Country) {
     let idx: number = this.countries.indexOf(e);
     this.countries.splice(idx,1);
   }

}
