import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactDetailsComponent } from './components/contacts/contact-details/contact-details.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { ContactFormComponent } from './components/contacts/contact-form/contact-form.component';
import { ContactRowComponent } from './components/contacts/contact-row/contact-row.component';
import { LoginComponent } from './components/auth/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    LayoutComponent,
    ContactDetailsComponent,
    ContactFormComponent,
    ContactRowComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    CustomFormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
