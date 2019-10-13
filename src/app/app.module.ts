import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { TetiereComponent } from './tetiere/tetiere.component';
import { UserFormComponent } from './user-form/user-form.component';
import { PhoneNumberPipe } from "./user-form/phoneNumber.pipe";
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TetiereComponent,
    UserFormComponent,
    PhoneNumberPipe,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    PhoneNumberPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }