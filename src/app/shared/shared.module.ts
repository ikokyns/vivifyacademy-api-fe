import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsService } from './services/contacts.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
  	ContactsService,
    AuthService
  ],
  declarations: [
  ],
  exports: [
  ]
})
export class SharedModule { }
