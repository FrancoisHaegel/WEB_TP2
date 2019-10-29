import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { TetiereComponent } from './tetiere/tetiere.component';
import { UserFormComponent } from './user-form/user-form.component';
import { PhoneNumberPipe } from "./user-form/phoneNumber.pipe";
import { FooterComponent } from './footer/footer.component';
import { ArticleService } from './service/article.service';
import { ArticleListComponent } from './article-list/article-list.component';
import { ListFilterComponent } from './list-filter/list-filter.component';
import { ListFilterPipe } from './list-filter/list-filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { InputErrorDirective } from './user-form/input-error.directive';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    TetiereComponent,
    UserFormComponent,
    PhoneNumberPipe,
    FooterComponent,
    ArticleListComponent,
    ListFilterComponent,
    ListFilterPipe,
    InputErrorDirective,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    PhoneNumberPipe,
    ArticleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }