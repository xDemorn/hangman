import { Component } from '@angular/core';

interface Letter {
  letter: string;
  visible: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // VARIABLES

  public errors: number = 0;
  public maxErrors: number = 0;
  public letters: Letter[] = [];

  // FUNCTIONS

  public setNewWord(word: HTMLInputElement): void {

    const splited: string[] = word.value.split('');

    const letters: Letter[] = splited.map((_letter: string) => {
      return { letter: _letter.toLowerCase(), visible: false };
    });

    this.letters = letters;
    this.maxErrors = letters.length;

    word.value = '';

  }

  public checkLetter(element: HTMLInputElement): void {

    const letter = element.value.toLowerCase();
    let containsLetter: boolean = false;

    this.letters.forEach(_letter => {
      if (_letter.letter === letter) {
        _letter.visible = true;
        containsLetter = true;
      }
    });

    element.value = '';

    if (!containsLetter) this.errors++;

  }

  public setRandomWord(): void {

  }
  
}
