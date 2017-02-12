import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routes';

import { AppComponent }  from './app.component';
import { PersonDetailsComponent } from './people-details.component';
import { PeopleListComponent } from './people-list.component';

@NgModule({
  imports: [ BrowserModule, routing ],
  declarations: [ AppComponent, PeopleListComponent, PersonDetailsComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
