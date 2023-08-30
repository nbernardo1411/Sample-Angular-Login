import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login2Component } from './login2/login2.component';
import { Login3Component } from './login3/login3.component';


const routes: Routes = [
{path: '', component: Login2Component},

{path: 'login', component: Login3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
