import { Component, Input } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'people-details',
  template: `
      <!-- this is the new syntax for ng-if -->
      <section *ngIf="person">
        <h2>You selected:  {{person.name}}</h2>
        <h3>Description</h3>
        <p>
           {{person.name}} weights  {{person.weight}} and is  {{person.height}} tall.
        </p>
      </section>
      `
})

export class PersonDetailsComponent{
  @Input() person : Person;
}
