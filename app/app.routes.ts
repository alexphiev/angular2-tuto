import { Routes, RouterModule } from '@angular/router';
import { PeopleListComponent } from './people-list.component';
import { PersonDetailsComponent } from './people-details.component';

const routes: Routes = [

  // map '/persons' to the people list component
  {
    path: 'persons',
    component: PeopleListComponent,
  },

  // map '/persons/:id' to person details component
  {
    path: 'persons/:id',
    component: PersonDetailsComponent,
  },

  // map '/' to '/persons' as our default route
  {
    path: '',
    redirectTo: '/persons',
    pathMatch: 'full'
  },
];

// exporting our own defnied routes to the rest of the app
export const routing = RouterModule.forRoot(routes);
