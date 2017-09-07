import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactsComponent } from './components/contacts/contacts.component';
import { ContactDetailsComponent } from './components/contacts/contact-details/contact-details.component';
import { LoginComponent } from './components/auth/login.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/contacts',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent,
    children: [
      {
        path: ':id',
        component: ContactDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
