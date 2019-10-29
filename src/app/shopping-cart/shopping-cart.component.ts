import { Component, OnInit } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CartManager } from './shopping-cart.state';
import { Article } from '../models/article/article';
import { AddArticle, RemoveArticle } from './shopping-cart.action';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

@Select(CartManager) articles$: Observable<Array<Article>>;

  constructor(private store: Store) {}

  onAddClick(article: Article) {
    this.store.dispatch(new AddArticle(article));
  }

  onRemoveClick(article: Article) {
    this.store.dispatch(new RemoveArticle(article));
  }

  ngOnInit() {
  }

}