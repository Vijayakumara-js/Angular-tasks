import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { PaginationModel } from 'src/app/models/table'
import { TableService } from 'src/app/services/table/table.service'
import { MatSort } from '@angular/material/sort';
import { TableUtil } from "./tableUtil";
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-exporttable',
  templateUrl: './exporttable.component.html',
  styleUrls: ['./exporttable.component.css']
})
export class ExporttableComponent implements OnInit {

  displayedColumns: string[] = ['position', 'useCaseName', 'description', 'statusName', 'members'];
	  dataSource = new MatTableDataSource<any>();

	  @ViewChild(MatPaginator) paginator!: MatPaginator;
	  setPagination: PaginationModel = new PaginationModel();
	  @ViewChild(MatSort) matSort!: MatSort;
	  ELEMENT_DATA: any;

	  constructor(private _table: TableService) { }

	  ngOnInit(): void {
		// this.dataSource.paginator = this.paginator;
		this.useCaseData();
	  }

	  useCaseData() {
		let scopeThis = this;
		this._table.getUseCaseList(1, this.setPagination.pageSize).subscribe({
		  next(data) {
			scopeThis.ELEMENT_DATA = data;
			console.log(scopeThis.ELEMENT_DATA)
			scopeThis.dataSource =  new MatTableDataSource<any>(scopeThis.ELEMENT_DATA.data);
			scopeThis.setPagination.length = scopeThis.ELEMENT_DATA.totalRecords;
			scopeThis.dataSource.sort = scopeThis.matSort;
		  },
		  error(msg) {
			if (msg === '401') {
			  console.log('Session Timeout');
			} else if (msg === '400') {
			  console.log('Bad Request');
			}
		  }
		});
	  }

	  onPaginateChange(event: any) {
		let scopeThis = this;
		this._table.getUseCaseList(event.pageIndex + 1, event.pageSize,).subscribe({
		  next(data) {
			scopeThis.ELEMENT_DATA = data;
			scopeThis.dataSource = new MatTableDataSource<any>(scopeThis.ELEMENT_DATA.data);
			scopeThis.setPagination.length = scopeThis.ELEMENT_DATA.totalRecords;
			scopeThis.dataSource.sort = scopeThis.matSort;
		  },
		  error(msg) {
			if (msg === '401') {
			  console.log('Session Timeout');
			} else if (msg === '400') {
			  console.log('Bad Request');
			}
		  }
		});
	  }

	  applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
		}

    exportTable() {
      TableUtil.exportTableToExcel("ExampleMaterialTable");
    }


}

