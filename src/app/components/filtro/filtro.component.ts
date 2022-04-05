import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'vs-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss'],
})
export class FiltroComponent implements OnInit, OnDestroy {
  @Output() aplicar: EventEmitter<any> = new EventEmitter();
  @Output() resetar: EventEmitter<any> = new EventEmitter();
  @Output() fechar: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.aplicar.unsubscribe();
    this.resetar.unsubscribe();
    this.fechar.unsubscribe();
  }

  onAplicar(): void {
    this.aplicar.emit();
  }

  onResetar(): void {
    this.resetar.emit();
  }

  onFechar(): void {
    this.fechar.emit();
  }
}
