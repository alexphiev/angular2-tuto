import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { PeopleListComponent } from './people-list.component';
import { PersonDetailsComponent } from './people-details.component';

import { PeopleService } from './people.service';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, PeopleListComponent, PersonDetailsComponent ],
  bootstrap: [ AppComponent ],
  providers: [PeopleService]
})
export class AppModule { }
