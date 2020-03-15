import { Component, Input } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListaPrenotazione } from './listaPrenota.model';
import { Prenotazione } from './prenota.model';
import { Stanza } from './stanza.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedOption : String;
  title = 'Prenotazioni';
  prenotazioni = ListaPrenotazione;
  selectedStanza: Prenotazione = ListaPrenotazione[0];
  listaStanze: Stanza[];
  oStanza: Observable<Stanza[]>;

  constructor(public  http: HttpClient) {

  }

  getStanza = (data : Stanza[]) =>
  {
    this.listaStanze = data;
  }

  ngOnInit() {
    this.listaStanze = new Array <Stanza>();
    this.oStanza = this.http.get<Stanza[]>("https://my-json-server.typicode.com/malizia-g/hotel/booking");
    this.oStanza.subscribe(this.getStanza);

  onClic(f: HTMLInputElement  ,t : HTMLInputElement, n :HTMLInputElement,  s :HTMLInputElement ) : boolean
  {
    this.selectedStanza = ListaPrenotazione.find((prenotazione: Prenotazione) => prenotazione.name == this.selectedOption);
    this.listaStanze.push(new Stanza(this.selectedStanza, new Date(f.value),new Date(t.value), String(n.value), s.value));

    f.value ="";
    t.value ="";
    n.value="";
    s.value="";
    this.selectedOption = undefined;
    return false;
  }

  onChange()
  {
    this.selectedStanza = ListaPrenotazione.find((booking: Prenotazione) => booking.name == this.selectedOption);
  }

}
