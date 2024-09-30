import { Component } from '@angular/core';
import { Article } from '../method/article';
import { RouterLink } from '@angular/router';
import { StoreService } from '../services/store.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  articles : Article[] = []
  storeService : StoreService = inject(StoreService)

  ngOnInit() {
    this.articles = this.storeService.getArticles()
  }

}
