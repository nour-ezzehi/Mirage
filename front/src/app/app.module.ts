import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ChildTestComponent } from './child-test/child-test.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddGroupComponent } from './add-group/add-group.component';
import { AppEditComponent } from './app-edit/app-edit.component';
import { AppDeleteComponent } from './app-delete/app-delete.component';
@NgModule({
  declarations: [
    AppComponent,
    ChildTestComponent,
    LoginComponent,
    RegisterComponent,
    AddGroupComponent,
    AppEditComponent,
    AppDeleteComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
