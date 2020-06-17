import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { SingupComponent } from './component/singup/singup.component';
import { HomeComponent } from './component/home/home.component';
import { BuyseatComponent } from './component/buyseat/buyseat.component';
import { ProfileComponent } from './component/profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {path: 'singup', component: SingupComponent},
  {path: 'home', component: HomeComponent},
  {path: 'buyseat',component: BuyseatComponent},
  {path: 'profile' , component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
