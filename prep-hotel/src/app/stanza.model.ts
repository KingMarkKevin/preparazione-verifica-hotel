import { Prenotazione } from './prenota.model';

export class Stanza
{
  constructor(
    public prenotazione : Prenotazione,
    public from: Date,
    public to : Date,
    public name : String,
    public surname : String,
  ) {}

}
