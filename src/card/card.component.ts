import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'card-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './card.component.html', 
  styleUrl: './card.component.scss'
})
export class cardComponent {

  article = {
    title: 'The BATMAN',
    author: 'John Doe',
    content: 'Just look it',
    image: 'https://steamuserimages-a.akamaihd.net/ugc/1845917231131686992/F1150DFCC45DD2D0A08307C4EEF8D584701A8B9D/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
    immageAlt : "placeHolder",
    hasBeenViewed: true,
    comment: ''
  };

  togglePublication():void {
    this.article.hasBeenViewed = !this.article.hasBeenViewed;
  }
}
