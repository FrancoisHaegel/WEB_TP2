import { Article } from '../models/article/article';

export class AddArticle {
  static readonly type = 'ADD_ARTICLE';
  static readonly Article;
  constructor(public article: Article) {
    this.article = article;
  }
}

export class RemoveArticle {
  static readonly type = 'REMOVE_ARTICLE';
  static readonly Article;
  constructor(public article: Article) {
    this.article = article;
  }
}