import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataFileService {

  constructor() { }

  getEmployeeData() {
    return [
      {"id": 1, "name": "Subhajit", "age": 24, "geography": "India", "location": "Kolkata", "branch": "Gitanjali Park", "project": "TSE", "department": "ENR", "grade": "y1"},
      {"id": 2, "name": "abcd", "age": 25, "geography": "India", "location": "Mumbai", "branch": "Gitanjali Park", "project": "TSE", "department": "ENR", "grade": "y1"},
      {"id": 3, "name": "efgh", "age": 26, "geography": "Asia", "location": "Tokyo", "branch": "Gitanjali Park", "project": "TSE", "department": "ENR", "grade": "y1"},
      {"id": 4, "name": "ijkl", "age": 27, "geography": "Europe", "location": "Ijmuiden", "branch": "Gitanjali Park", "project": "TSE", "department": "ENR", "grade": "y1"},
      {"id": 5, "name": "mnop", "age": 28, "geography": "America", "location": "Hueston", "branch": "Gitanjali Park", "project": "TSE", "department": "ENR", "grade": "y1"},
      {"id": 6, "name": "qrst", "age": 99, "geography": "Africa", "location": "Mombasa", "branch": "Gitanjali Park", "project": "TSE", "department": "ENR", "grade": "y1"}
    ];
    
  }

  getCompanyData() {
    return [
      {"id": 1, "name": "xiomi", "origin": "China", "product": "mobile", "revenue": 10000000, "people": 20000, "ceo": "Lei Jun", "established": 1990},
      {"id": 2, "name": "samsung", "origin": "China", "product": "screen", "revenue": 50000000, "people": 200000, "ceo": "XXX", "established": 1970},
      {"id": 3, "name": "apple", "origin": "China", "product": "multi", "revenue": 200000000, "people": 50000, "ceo": "Tim Cook", "established": 1960},
      {"id": 4, "name": "huawei", "origin": "China", "product": "camera", "revenue": 10000000, "people": 2000, "ceo": "YYY", "established": 1950},
      {"id": 5, "name": "oppo", "origin": "China", "product": "audio", "revenue": 4000000, "people": 80000, "ceo": "ZZZ", "established": 1998},
      {"id": 6, "name": "nokia", "origin": "China", "product": "laptop", "revenue": 800000, "people": 20000, "ceo": "MMM", "established": 1992}
    ];
    
  }

  getCountryData() {
    return [
      {"id": 1, "name": "India", "capital": "New Delhi", "continent": "Asia", "government": "democracy", "population": 1400000000, "currency": "Rupee", "terrain": "Plane"},
      {"id": 2, "name": "USA", "capital": "Washington DC", "continent": "North America", "government": "democracy", "population": 100000000, "currency": "Dollar", "terrain": "Mountain"},
      {"id": 3, "name": "Argentina", "capital": "Buenos Ares", "continent": "South America", "government": "democracy", "population": 1400000, "currency": "Peso", "terrain": "Desert"},
      {"id": 4, "name": "Brasil", "capital": "Brasilia", "continent": "South America", "government": "democracy", "population": 20000000, "currency": "Real", "terrain": "Costal"},
      {"id": 5, "name": "Germany", "capital": "Berlin", "continent": "Europe", "government": "democracy", "population": 5000000, "currency": "Euro", "terrain": "Plateau"},
      {"id": 6, "name": "England", "capital": "London", "continent": "Europe", "government": "Monarch", "population": 2000000, "currency": "Pound", "terrain": "Tundra"}
    ];
    
  }

  getAddressData() {
    return [
      {"name": "Subhajit Paul", "phone": 9100000000, "email": "xyz@zmail.com", "defAdd": "Rajpur , Kolkata, India", "currAdd": "Sonarpur, Kolkata, India"},
      {"name": "Zlatan Ibrahimovic", "phone": 2000000000, "email": "zlatan@zlatan.com", "defAdd": "Sweden", "currAdd": "USA"},
      {"name": "Leonel Messi", "phone": 5000000000, "email": "messi@lionel.com", "defAdd": "Buenos Ares, Argentina", "currAdd": "Barcelona, Spain"},
      {"name": "Frenky De Jong", "phone": 7000000000, "email": "dejong@zmail.com", "defAdd": "Amsterdam, Netherlands", "currAdd": "Barcelona, Spain"},
      {"name": "Kevin De Bruyne", "phone": 8000000000, "email": "kevin@zmail.com", "defAdd": "Belgium", "currAdd": "London, England"}
    ];
  }

}
