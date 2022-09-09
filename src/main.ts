import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

/*exported STARTING_INDEX*/
export const STARTING_INDEX = 1;

/**
 *
 */
// VARIABLES
    const subHeadingText = 'What would you like to do today?';
    const writingSpeed = 50;
    let charPosition = 0;
  export function greetUser(): void{

    const greet = <HTMLElement>document.getElementById('greet');
    if (charPosition < subHeadingText.length) {
      greet.innerHTML += subHeadingText[charPosition];
      charPosition++;
      setTimeout(greetUser, writingSpeed);

    }
  }
