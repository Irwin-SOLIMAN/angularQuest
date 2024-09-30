import { Injectable } from "@angular/core";
import { Article } from "../method/article";

@Injectable({
    providedIn:'root' // singleton
})

export class StoreService {
     
    articles : Article[] = [
        {
          id: 1,
          title: 'Angular 16: Les nouveautés',
          author: 'Alice',
          content: "Les nouveautés d'Angular 16 incluent...",
          image: 'https://via.placeholder.com/350x150',
          isPublished: true,
          comment: '',
          likes: 90,
        },
        {
          id: 2,
          title: 'Développer une API REST',
          author: 'Bob',
          content: 'Développer une API REST nécessite...',
          image: 'https://via.placeholder.com/350x150',
          isPublished: false,
          comment: '',
          likes: 75,
        },
        {
          id: 3,
          title: 'Pourquoi TypeScript est essentiel ?',
          author: 'Charlie',
          content: 'TypeScript apporte de la robustesse...',
          image: 'https://via.placeholder.com/350x150',
          isPublished: true,
          comment: '',
          likes: 200,
        },
      ];

      getArticles() : Article[] {
        return this.articles;
      }

      getArticleById(id : number) : Article {
        return this.articles[id-1]
      }
 

}