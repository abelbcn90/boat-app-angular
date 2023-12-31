import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Boat } from '../models/boat.model';

const baseUrl = 'http://localhost:8080/api/boats';

@Injectable({
	providedIn: 'root',
})
export class BoatService {
	constructor(private http: HttpClient) { }

	getAll(): Observable<Boat[]> {
		return this.http.get<Boat[]>(baseUrl);
	}

	get(id: any): Observable<Boat> {
		return this.http.get<Boat>(`${baseUrl}/${id}`);
	}

	create(data: any): Observable<any> {
		return this.http.post(baseUrl, data);
	}

	update(id: any, data: any): Observable<any> {
		return this.http.put(`${baseUrl}/${id}`, data);
	}

	delete(id: any): Observable<any> {
		return this.http.delete(`${baseUrl}/${id}`);
	}

	deleteAll(): Observable<any> {
		return this.http.delete(baseUrl);
	}

	findByName(name: any): Observable<Boat[]> {
		return this.http.get<Boat[]>(`${baseUrl}?name=${name}`);
	}
}
