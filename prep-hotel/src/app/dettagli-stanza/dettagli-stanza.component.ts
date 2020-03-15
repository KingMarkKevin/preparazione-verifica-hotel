import { Component, OnInit, Input } from '@angular/core';
import { Prenotazione } from '../prenota.model';

@Component({
  selector: 'app-dettagli-stanza',
  templateUrl: './dettagli-stanza.component.html',
  styleUrls: ['./dettagli-stanza.component.css']
})
export class DettagliStanzaComponent implements OnInit {
  @Input() prenotazione : Prenotazione;

  constructor() { }

  ngOnInit(): void {
  }

}
