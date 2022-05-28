import { Component } from '@angular/core';

/*
  Komponent - element składowy naszej aplikacji, który odpowiada za stworzenie widoku dla Użytkownika.
  Jest to połączenie templatki (HTML), styli ((S)CSS) i logiki (TypeScript, a konkretniej klasa komponentu).

  Widoczność styli domyślnie tylko w komponencie, w którym zostały użyte (pojęcie 'enkapsulacji').
  Opcjonalnie możemy również podać dodatkowe pole dekoratora jakim jest lista providers (lista serwisów).
  W takim wypadku otrzymamy nową instancję naszego serwisu tylko i wyłącznie dla komponentu.
*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sda-app';
}
