import { Component } from '@angular/core';

import { Officer } from 'src/app/models/officer.model';

@Component({
  selector: 'csc-officers',
  templateUrl: './officers.component.html',
  styleUrls: ['./officers.component.scss']
})
export class OfficersComponent {

  officers: Officer[];
  constructor() { 
    this.officers = [
      new Officer('Advisor', 'Morgan Beebe'),
      new Officer('President', 'Gabel Ammon'),
      new Officer('Vice President', 'Sean Allen'),
      new Officer('Secretary', 'Some Person'),
      new Officer('Treasurer', 'Some Person'),
      new Officer('ASCR Representative', 'Some Person'),
    ]
  }
}
