# Aby uruchomić projekt

- `npm install`
- `ng serve`

W przypadku, gdy projekt nie uruchamia się z powodu zajętego portu:

```sh
ng serve --open --port=XXXX, gdzie XXXX to numer dowolnego wolnego portu
```

---

# Zrealizowane kroki z zajęć

## Stworzenie projektu

```sh
ng new sda-app --skipTests=true
```

Stylowanie preprocesorem SCSS, bez plików z testami jednostkowymi.
Domyslny routing Angulara - Tak, skorzystaliśmy z niego
cd sda-app do wejścia w folder z nowym projektem

## Pobranie bootstrapa

```sh
npm install --save bootstrap
```

Sama instalacja nie jest jednak wystarczająca do rozpoczecia pracy z Bootstrapem w naszej aplikacji.
Należy dokonać aktualizacji pliku angular.json w celu przekazania odpowiednich plików Bootstrapa, które
wykorzystamy w projekcie.

Znajdujemy sciezki:
projects->architect->build->styles
projects->architect->build->scripts

W celu rozpoczecia korzystania z pliku ze stylami Bootstrapa oraz plikiem JavaScriptowym Bootstrapa należy dodac odpowiednie pliki do list styles oraz scripts:

```json
    "styles": [
        "./node_modules/bootstrap/dist/css/bootstrap.css",
        "src/styles.scss"
    ],
    "scripts": [
        "./node_modules/bootstrap/dist/js/bootstrap.js"
    ]
```
## Uruchomienie aplikacji: ng serve - gotowy boilerplate z działającym Bootstrapem

## Core & Shared Module

## Dodanie komponentu navbaru w Core Module

## Stworzenie widoku navbaru

## Dodanie nowych komponetów todo i students w folderze views (Views Module)

## Konfiguracja routingu

## Modyfikacja navbaru w celu obsługi routingu

## Page not found - obsługa na poziomie routingu oraz wyświetlenie stworzonego komponentu PageNotFound w przypadku nieobsługiwanej ścieżki strony.

## Stworzenie intefejsu TodoItem

## Stworzenie danych mock dla listy todo

## Stworzenie serwisu odpowiedzialnego za obsługę przetwarzania danych

## Cykl życia aplikacji - ngOnInit

## Przygotowanie podstawowego widoku listy Todo

## Aktualizacja o użycie wbudowanej dyrektywy *ngFor w celu dynamicznego wyświetlania wpisów na liście Todo

## Użycie ngModel w celu obsługi checkboxów

## Zbudowanie formularza ReactiveFormsModule

## Zastosowanie ngClass, ngIf, a także właściwości takich jak disabled

## Usuwanie wpisów z listy Todo

## Empty state dla pustej listy Todo
