import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';
import { UserFormsComponent } from './user-forms/user-forms.component';
import { FormsMockComponent } from './forms-mock/forms-mock.component';

@NgModule({
  declarations: [
    AppComponent,
    SubscriptionFormComponent,
    UserFormsComponent,
    FormsMockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
