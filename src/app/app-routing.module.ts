import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardCollectionComponent } from './components/card-collection/card-collection.component';
import { CardEditorComponent } from './components/card-editor/card-editor.component';
import { PrintDocumentComponent } from './components/print-document/print-document.component';

const routes: Routes = [
  { path: 'collection', component: CardCollectionComponent },
  { path: 'card/:id', component: CardEditorComponent },
  { path: 'print', component: PrintDocumentComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
