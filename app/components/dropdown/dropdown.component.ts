import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  ngOnInit(): void {
  }
  constructor() { }


  selectedValue: any;
  selectedName: any;
  selectedId: any;

  birthdayDate:any

  getFromDate(){
    let date1: string | null;
    date1 = new DatePipe('en-US').transform(this.birthdayDate, 'dd/MM/yyyy');
    console.log("This is the DATE:", date1);
  }

  public collection = [
    { name: 'suresh', id: 1 },
    { name: 'ramesh', id: 2 },
    { name: 'sharan', id: 3 },
    { name: 'guru', id: 4 },
    { name: 'naveen', id: 5 },
  ];

  onSelectName({ id, name }: any): void {
    this.selectedName = name;
    this.selectedId = id;
  }


  // selectedTeam = '';

  // onSelected(value:string): void {
  // 	this.selectedTeam = value;
  // }



}
