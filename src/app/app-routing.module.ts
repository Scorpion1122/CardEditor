import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardCollectionComponent } from './components/card-collection/card-collection.component';

const routes: Routes = [
  { path: 'collection', component: CardCollectionComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
