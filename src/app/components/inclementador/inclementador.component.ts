import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inclementador',
  templateUrl: './inclementador.component.html',
  styles: []
})
export class InclementadorComponent implements OnInit {

  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    console.log('Leyenda:', this.leyenda);
    console.log('Progreso:', this.progreso);
  }

  ngOnInit() {
  }

  onChanges(newValue: number) {
    let elemHTML: any = document.getElementsByName('progreso')[0];


    console.log(newValue);
    if (newValue >= 100) {
      this.progreso = 100;
    } else if (newValue <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }
    elemHTML.value = this.progreso;

    this.cambioValor.emit(this.progreso);
  }

  cambiarValor(valor) {
    if (this.progreso >= 100) {
      return;
    }
    if (this.progreso <= 0) {
      return;
    }
    this.progreso = this.progreso + valor;
    this.cambioValor.emit(this.progreso);
  }

}
