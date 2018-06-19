import { Component, OnInit } from '@angular/core';

import { Exercice1EnfantComponent } from './exercice1-enfant/exercice1-enfant.component';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  public parentCompteur: number = 0;

  constructor() { }

  ngOnInit() {
  }
  majParentCompteur(event) {
    this.parentCompteur = event.value;
  }
}
