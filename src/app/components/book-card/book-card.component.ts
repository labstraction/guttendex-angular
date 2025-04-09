import { Component, inject, input, numberAttribute, output } from '@angular/core';
import { Book } from '../../model/book';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-book-card',
  imports: [CommonModule],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss'
})
export class BookCardComponent {

  book = input<Book>()
  bookSelected = output<Book | undefined>();
  hasButton = input<boolean>(false)

  resizeTitle(title: string, maxWords:number) {
    const wordsArray = title.split(' ');
    const resizedArray = wordsArray.slice(0, maxWords);
    let resizedTitle = resizedArray.join(' ');
    if (title.length !== resizedTitle.length) {
      resizedTitle += '...'
    }
    return resizedTitle;
  }

  selectBook() {
    this.bookSelected.emit(this.book())
  }
}
