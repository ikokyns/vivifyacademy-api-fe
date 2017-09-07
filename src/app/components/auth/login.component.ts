import { Component } from '@angular/core';
import { AuthService } from './../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: 'login.component.html'
})

export class LoginComponent {

	constructor(
		private auth: AuthService,
		private router: Router
	) {}


	login(email, password){
		console.log(email, password);
		this.auth.login(email, password).subscribe((token: string) => {
			console.log(token);
			this.router.navigateByUrl('/');
		}, (err) => {			
			alert (`${err.error}`);
		});
	}
}