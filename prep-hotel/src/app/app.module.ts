import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ListaPrenotazione } from './listaPrenota.model';
import { Prenotazione } from './prenota.model';
import { Stanza } from './stanza.model';
import { ListaPrenComponent } from './lista-pren/lista-pren.component';
import { DettagliStanzaComponent } from './dettagli-stanza/dettagli-stanza.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPrenComponent,
    DettagliStanzaComponent
  ],
  imports: [
    BrowserModule, NgbModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
