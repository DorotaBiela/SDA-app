import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { StudentsComponent } from './views/students/students.component';
import { TodoComponent } from './views/todo/todo.component';

/*
  Routing - mechanizm trasowania (tworzenia ścieżek do stron/podston (do widoków))

  - kolejność ma znaczenie
  - ** (podwójny znak asterixu) oznacza tzw. Wildcard - automatyczne dopasowania
  - Wildcard pozwala na przekierowania Użytkownika z dowolnego adresu
  - Wildcard można wykorzystać do obsługi błędu 404 (brak strony), Page not Found (Strona nie została odnaleziona)
  - Wildcard zawsze na końcu naszych tras
  - jeśli użyjemy redirectToto należy również określić pathMatch
*/

const routes: Routes = [
  {
    path: 'todo', component: TodoComponent
  },
  {
    path: 'students', component: StudentsComponent
  },
  {
    path: '', redirectTo: '/todo', pathMatch: 'full'
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
