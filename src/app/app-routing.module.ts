import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardCollectionComponent } from './components/card-collection/card-collection.component';
import { CardEditorComponent } from './components/card-editor/card-editor.component';

const routes: Routes = [
  { path: 'collection', component: CardCollectionComponent },
  { path: 'card/:id', component: CardEditorComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
