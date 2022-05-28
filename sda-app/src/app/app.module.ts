import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { ViewsModule } from './views/views.module';

/*
  Moduł w Angularze łączy ze sobą wszystkie elementy aplikacji w całość.
  Musimy mieć przynajmniej jeden moduł w całej aplikacji.
  Tylko jeden moduł może być Root Module - głównym modułem.
  Możemy tworzyć wiele modułów, a moduły mogą być w sobie zagnieżdżone.
*/

@NgModule({
  declarations: [ // lista klas powiązanych z widokiem: komponenty, dyrektywy i pipe'y
    AppComponent
  ],
  imports: [ // lista modułów koniecznych do uruchomienia aplikacji
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ViewsModule
  ],
  providers: [], // lista serwisów dostępnych w obrębie danego modułu - wspólna instancja serwisu pozwala na współdzielenie danych w aplikacji
  bootstrap: [AppComponent] // lista komponentów, które zostaną wyświetlone przy załadowaniu aplikacji (bootstrap tylko dla Root Module)
})
export class AppModule { }
