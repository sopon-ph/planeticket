import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { AnvbarComponent } from './component/anvbar/anvbar.component';
import { SingupComponent } from './component/singup/singup.component';
import { HomeComponent } from './component/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShowplaneComponent } from './component/showplane/showplane.component';
import { BuyseatComponent } from './component/buyseat/buyseat.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AnvbarComponent,
    SingupComponent,
    HomeComponent,
    ShowplaneComponent,
    BuyseatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
