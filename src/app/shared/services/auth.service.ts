import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';

@Injectable()


export class AuthService {

	constructor(private http: HttpClient){}

	login(email: string, password: string) {
		return new Observable((o: Observer<any>) => {
			this.http.post('http://localhost:8000/api/login', {
				email,
				password
			}).subscribe((data: { token: string }) => {
				window.localStorage.setItem('token', data.token);
				o.next(data.token);
				return o.complete();
			}, (err) =>{
				return o.error(err);
			});
		});
	}

	getRequestHeaders(){
		let token = window.localStorage.getItem('token');
		return new HttpHeaders().set('Authorization', `Bearer ${token}`);
	}
}