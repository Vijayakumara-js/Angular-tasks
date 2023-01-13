import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { TableList } from 'src/app/models/table';

@Injectable({
  providedIn: 'root'
})
export class TableService {

 	_baseUrl = 'http://202.21.38.161/opina_api/api/v0/';

  	constructor( public http:HttpClient) { }

	getUseCaseList(pageIndex:number, pageSize:number): Observable<TableList> {
		let useeGroupPagination = new HttpParams();
		useeGroupPagination = useeGroupPagination.append('PageNumber', pageIndex);
		useeGroupPagination = useeGroupPagination.append('PageSize', pageSize);
		return this.http.get<TableList>(`${this._baseUrl}UseCase/UseCaseList`, { params: useeGroupPagination})
		.pipe(catchError(err => throwError(() => new Error(err))))
	}
}
