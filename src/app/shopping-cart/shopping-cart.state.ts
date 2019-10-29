import { State, Action } from '@ngxs/store';
import { Article } from '../models/article/article';
import { AddArticle, RemoveArticle } from './shopping-cart.action';

@State<Array<Article>>({
  name: 'articles',
  defaults: []
})

export class CartManager {
  @Action(AddArticle)
  addArticle(article: Article, { getState, setState }) {
    const state = getState();
    setState([...state.articles, article]);
  }

  @Action(RemoveArticle)
  removeArticle(article: Article, { getState, setState }) {
    const state = getState();
    const index = state.articles.indexOf(article, 0);
    if (index > -1) {
      state.articles.splice(index, 1);
    }
    setState([...state.articles]);
  }
}