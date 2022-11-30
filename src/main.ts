import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

/**
 *
 */
// VARIABLES
export function greet():void {
	let charPosition = 0;
	function greetUser(): void {
	  const subHeadingText = 'What would you like to do today?';
	  const writingSpeed = 50;
	  const greet = <HTMLElement>document.getElementById('greet');
	  if (charPosition < subHeadingText.length) {
	    greet.innerHTML += subHeadingText[charPosition]; // append next letter
	    charPosition++; // go to next letter of subHeadingText
	    setTimeout(greetUser, writingSpeed); // append next letter every 50ms
	  }
	}
  greetUser();
}
