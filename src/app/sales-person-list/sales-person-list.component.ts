import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';
@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList: SalesPerson[] = [
    new SalesPerson("Jalin","Rabei", "test@hotmail.com", 50,false,"BRL"),
    new SalesPerson("Volin","Rabá","teste2@hotmail.com", 40,false,"CAD"),
    new SalesPerson("Tebato", "Nakara", "teste3@hotmail.com",90,false,"JPY"),
    new SalesPerson("Kataro", "Myanota", "teste4@hotmail.com",60,false,"EUR")
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
