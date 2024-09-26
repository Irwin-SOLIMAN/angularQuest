import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'card-component',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './card.component.html', 
  styleUrl: './card.component.scss'
})
export class cardComponent {

  typeFocus : boolean = true;

  feedbacks : string[] = ["Trop bien", "Bof", "A voir absolument"]

  showComments : boolean = true;

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

  handleHideComments():void {
    this.showComments = !this.showComments;
  }
   
  toggleFocus():void {
    this.typeFocus = !this.typeFocus;
  }

  

}
