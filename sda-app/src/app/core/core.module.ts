import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';

/*
  Core Module - istnieje, aby ustrukturyzować elementy aplikacji, które wykorzystywane są tylko jeden raz w aplikacji (np. komponent navbaru).
  Wszystkie elementy znajdujące się w tym module są tworzone tylko jeden raz.

  Core Module powinien być zaimportowany tylko jeden raz, najlepiej w głównym module aplikacji (Root Module).
*/

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }
