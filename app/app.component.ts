import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <h1> {{title}}</h1>
    <people-list>
    `
    // HERE! This registers the PeopleService
    // now Angular 2 knows to inject it when required
})
export class AppComponent {
  title: String = 'Star Wars PPlz!!';
}
