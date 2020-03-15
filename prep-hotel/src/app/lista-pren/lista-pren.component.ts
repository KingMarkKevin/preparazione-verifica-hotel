import { Component, OnInit, Input } from '@angular/core';
import { Stanza } from '../stanza.model';
import { Prenotazione } from '../prenota.model';

@Component({
  selector: 'app-lista-pren',
  templateUrl: './lista-pren.component.html',
  styleUrls: ['./lista-pren.component.css']
})
export class ListaPrenComponent implements OnInit {
  @Input() listaStanze: Stanza[];

  mostraLista : boolean = true;
  constructor() { }

  ngOnInit(): void {

  }

  hideList()
  {
    this.mostraLista = !this.mostraLista;
  }

}
