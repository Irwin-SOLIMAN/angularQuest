import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import { ActivatedRoute } from '@angular/router';
import { ParamMap } from '@angular/router';
import { Router } from '@angular/router';
import { StoreService } from '../services/store.service';
import { Article } from '../method/article';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss',
})
export class ArticlePageComponent {
  // article!: Article;
  // route: ActivatedRoute = inject(ActivatedRoute);
  articleId!: number;
  storeService: StoreService = inject(StoreService);
  router: Router = inject(Router);

  @Input() article!: Article;

  @Output() articleLikedTitle: EventEmitter<string> =
    new EventEmitter<string>();

  // ngOnInit() {
  //   this.route.paramMap.subscribe((params: ParamMap) => {
  //     this.articleId = Number(params.get('id'));
  //   });

  //   const storeLength: number = this.storeService.getArticles().length;

  //   if (storeLength >= this.articleId) {
  //     this.article = this.storeService.getArticleById(this.articleId);
  //   } else {
  //     this.router.navigate(['**']);
  //   }
  // }

  togglePublication(): void {
    this.article.isPublished = !this.article.isPublished;
  }

  isAdmin: boolean = true;

  toggleIsAdmin(): void {
    this.isAdmin = !this.isAdmin;
  }

  isLiked(): void {
    this.articleLikedTitle.emit(this.article.title);
  }
}
