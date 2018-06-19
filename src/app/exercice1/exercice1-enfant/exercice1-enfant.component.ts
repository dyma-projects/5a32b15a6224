import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  childCompteur: number = 0;
  @Output() changeChildCompteur: EventEmitter = new EventEmitter();
  @Input() parentCompteur: string;

  constructor() { }

  ngOnInit() {
  }

  down(): void {
    this.childCompteur--;
    this.changeChildCompteur.emit({
      value: this.childCompteur
    });
  }
  up(): void {
    this.childCompteur++;
    this.changeChildCompteur.emit({
      value: this.childCompteur
    });
  }
}
