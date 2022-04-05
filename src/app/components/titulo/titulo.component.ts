import { Component, EventEmitter, Input, OnInit, Output, OnDestroy } from '@angular/core';

@Component({
  selector: 'vs-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.scss'],
})
export class TituloComponent implements OnInit, OnDestroy {
  @Input() temValor: boolean = false;
  @Input() utilizaAcoes: boolean = true;

  @Output() buscar = new EventEmitter();
  @Output() cancelar = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.buscar.unsubscribe();
    this.cancelar.unsubscribe();
  }

  onBuscar(): void {
    this.buscar.emit();
  }

  onCancelar(): void {
    this.cancelar.emit();
  }
}
