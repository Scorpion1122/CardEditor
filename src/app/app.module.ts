import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material';

// Material Support
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';

// External
import { BytelabsColorSelectorModule } from '@bytelabsco/ngx-color-selector'; // https://github.com/bytelabsco/ngx-color-selector

import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { SpellCardDetailComponent } from './components/spell-card-detail/spell-card-detail.component';
import { MessagesComponent } from './components/messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { CardCollectionComponent } from './components/card-collection/card-collection.component';
import { CardEditorComponent } from './components/card-editor/card-editor.component';
import { PrintPageComponent } from './components/print-page/print-page.component';
import { PrintablePageDirective } from './directives/printable-page.directive';
import { PrintDocumentComponent } from './components/print-document/print-document.component';
import { SpellCardDetailDirective } from './directives/spell-card-detail.directive';
import { CardTitleComponent } from './components/card-elements/card-title/card-title.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    SpellCardDetailComponent,
    MessagesComponent,
    HeaderComponent,
    CardCollectionComponent,
    CardEditorComponent,
    PrintPageComponent,
    PrintablePageDirective,
    PrintDocumentComponent,
    SpellCardDetailDirective,
    CardTitleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatCheckboxModule,
    BytelabsColorSelectorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
